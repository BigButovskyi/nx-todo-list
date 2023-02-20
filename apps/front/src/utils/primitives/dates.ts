import { format } from 'date-fns';

export const formatToDescriptiveDate = (date: Date) => format(date, 'dd MMMM Y');

export const getLocalWeekDay = (date: Date) => format(date, 'eeee');

export const parseDateFromString = (datelike: string) => new Date(Date.parse(datelike));
