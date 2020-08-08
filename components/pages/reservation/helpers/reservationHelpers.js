import { DateTime } from 'luxon';

export const parseDate = date => DateTime.fromJSDate(date).toISODate();
export const parseTime = time =>
  DateTime.fromJSDate(time)
    .toISOTime()
    .slice(0, 5);
