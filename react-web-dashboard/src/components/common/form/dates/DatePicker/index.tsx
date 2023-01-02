import * as i from 'types';
import * as React from 'react';
import nl from 'date-fns/locale/nl';
import { DayPicker, DayPickerProps, DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { FormField } from 'common/form';

import { StyledDayPicker } from './styled';

export const DatePicker = React.forwardRef(
  (
    {
      captionLayout,
      description,
      disableNavigation,
      defaultMonth,
      locale,
      numberOfMonths,
      disabled,
      fromYear,
      fromMonth,
      fromDate,
      toYear,
      showOutsideDays,
      showWeekNumber,
      onChange,
      margin,
      name,
      label,
      error,
      ...props
    }: DatePickerProps,
    ref,
  ) => {
    return (
      <FormField {...{ name, label, description, margin, error }}>
        <StyledDayPicker>
          <DayPicker
            {...{
              ...(props.mode === 'multiple'
                ? {
                    mode: props.mode,
                    onSelect: (date) => onChange(date),
                    selected: props.selected,
                  }
                : props.mode === 'range'
                ? {
                    mode: props.mode,
                    onSelect: (date) => onChange(date),
                    selected: props.selected,
                  }
                : {
                    mode: 'single',
                    onSelect: (date) => onChange(date),
                    selected: props.selected,
                  }),
            }}
            captionLayout={captionLayout || 'buttons'}
            defaultMonth={defaultMonth || undefined}
            disableNavigation={disableNavigation || false}
            disabled={disabled || undefined}
            numberOfMonths={numberOfMonths || 1}
            fromMonth={fromMonth || undefined}
            fromDate={fromDate || undefined}
            fromYear={fromYear || undefined}
            toYear={toYear || undefined}
            showOutsideDays={showOutsideDays || true}
            showWeekNumber={showWeekNumber || false}
            locale={locale === 'nl' ? nl : undefined}
          />
        </StyledDayPicker>
      </FormField>
    );
  },
);

export type DateModes = Date | Date[] | DateRange;

export type DefaultDateProps = Pick<
  DayPickerProps,
  | 'captionLayout'
  | 'disableNavigation'
  | 'defaultMonth'
  | 'numberOfMonths'
  | 'fromYear'
  | 'toYear'
  | 'fromMonth'
  | 'fromDate'
  | 'showOutsideDays'
  | 'showWeekNumber'
  | 'disabled'
> & {
  name: string;
  onChange: (date?: DateModes) => void;
  locale?: 'nl';
} & (
    | {
        mode?: undefined;
        selected?: undefined;
      }
    | {
        mode: 'single';
        selected?: Date;
      }
    | {
        mode: 'multiple';
        selected?: Date[];
      }
    | {
        mode: 'range';
        selected?: DateRange;
      }
  );

export type DatePickerProps = DefaultDateProps & Omit<i.FormFieldProps, 'onDeleteInput'>;
