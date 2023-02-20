import { UserRoles } from '@app/shared-types';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { getArraysIntersection } from '../../utils/arrays';
import { ROLES_KEY } from '../custom-decorators';

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
		const allowedRoles = this.reflector.getAllAndMerge<UserRoles[]>(ROLES_KEY, [
			context.getHandler(), // if decorator is near method
			context.getClass(), // if decorator is near component
		]);
		if (!allowedRoles) {
			return true;
		}

		const { user } = context.switchToHttp().getRequest();
		if (!user?.roles) {
			return false;
		}

		return this.isMatch(user.roles, allowedRoles);
	}

	private isMatch(userRoles: UserRoles[], allowedRoles: UserRoles[]) {
		const matchedRoles = getArraysIntersection(userRoles, allowedRoles);
		return matchedRoles.length > 0;
	}
}
