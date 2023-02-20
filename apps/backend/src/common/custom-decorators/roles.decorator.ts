import { SetMetadata } from '@nestjs/common';
import { UserRoles } from '@app/shared-types';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: UserRoles[]) => SetMetadata(ROLES_KEY, roles);
