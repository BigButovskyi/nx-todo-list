import { RequestUserInfo } from '@app/shared-types';
import { Request } from 'express';

export interface RequestWithUserInfo extends Request {
	user: RequestUserInfo;
}
