import { Dayjs } from 'dayjs';

export type DateRangeState = {
  from?: Date;
  to?: Date;
};

export type DateModifiers = {
  disabled?: boolean;
  outside?: boolean;
};

export type CalculateDatesType = 'day' | 'week' | 'month' | 'year';

export type DateType = string | Date | Dayjs;

export type DateRangeType = {
  from: DateType;
  to: DateType;
};
