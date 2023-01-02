import { ValidationRule, Validate } from 'react-hook-form';

type ValidationMap = {
  [name: string]: { validate: Validate<string> } | ValidationRule | Record<string, ValidationRule>;
};

// Use a function here, so the values of the object van be typed, but the keys can be inferred
const createValidationMap = <T extends ValidationMap>(validation: T) => validation;

export const validation = createValidationMap({
  required: {
    required: 'This field is required',
  },
  phone: {
    pattern: {
      value: /^\+?[0-9-() ]*$/,
      message: 'Enter a valid phone number',
    },
    maxLength: {
      value: 14,
      message: 'Phone number is too long',
    },
    minLength: {
      value: 10,
      message: 'Phone number is too short',
    },
  },
  email: {
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Enter a valid email address',
    },
  },
  number: {
    pattern: {
      value: /^\d+$/,
      message: 'This field can only contain numbers',
    },
  },
  date: {
    pattern: {
      value: /^(0?[1-9]|[12][0-9]|3[01])[-](0?[1-9]|1[012])[-]\d{4}$/,
      message: 'Enter a valid date',
    },
  },
  address: {
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+$/,
      message: 'Enter an address',
    },
  },
  password: {
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.[\]{}()?\-"!@#%&/,><':;|_~`])\S{8,99}$/,
      message:
        'Password must contain at least 8 characters, 1 capitalized letter, 1 normal letter, 1 number and 1 special character',
    },
    minLength: {
      value: 8,
      message:
        'Password must contain at least 8 characters, 1 capitalized letter, 1 normal letter, 1 number and 1 special character',
    },
  },
  textarea: {
    maxLength: {
      value: 255,
      message: 'You exceeded the maximum number of characters',
    },
  },
  postalCode: {
    pattern: {
      value: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i,
      message: 'Enter a valid postal code',
    },
  },
  positiveInteger: {
    validate: (value: string) => {
      const isValid = parseInt(value) >= 0;
      return !value || isValid || 'The Value must be greater than 0';
    },
  },
  kvkNumber: {
    maxLength: {
      value: 8,
      message: 'KvK registration id must be 8 characters',
    },
    minLength: {
      value: 8,
      message: 'KvK registration id must be 8 characters',
    },
  },
  time: {
    pattern: {
      value: /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
      message: 'Enter a valid time',
    },
  },
});
