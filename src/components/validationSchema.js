import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string('Must be a string')
    .min(3, 'Name is too short')
    .required('Required'),
  preparation_time: yup
    .number('Must be a number')
    .positive('Must be a positive number more than 0')
    .integer('Must be an integer number')
    .required('Required'),
  type: yup.string().matches(/(pizza|soup|sandwich)/),
  no_of_slices: yup
    .number('Must be a number')
    .integer('Must be an integer number')
    .min(1, 'Minimal quantity is 1')
    .positive('Must be a positive number'),
  diameter: yup
    .number('Must be a number')
    .positive('Must be a positive number'),
  spiciness_scale: yup
    .number('Must be a number')
    .integer('Must be an integer number')
    .positive('Must be a positive number')
    .min(1, 'Minimal quantity is 1'),
  slices_of_bread: yup
    .number('Must be a number')
    .integer('Must be an integer number')
    .positive('Must be a positive number')
    .min(1, 'Minimal quantity is 1'),
});
