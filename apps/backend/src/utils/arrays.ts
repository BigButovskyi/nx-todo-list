import * as _ from 'lodash';

export const getArraysIntersection = (list1: unknown[], list2: unknown[]) => {
	return _.intersection(list1, list2);
};
