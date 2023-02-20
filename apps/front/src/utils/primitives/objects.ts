import * as _ from 'lodash';

export const allPropsAreSet = (object: object) => _.values(object).every(v => !_.isEmpty(v));
