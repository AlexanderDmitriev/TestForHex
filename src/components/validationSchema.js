import * as yup from 'yup';
 //Схема валидации
 export const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  preparation_time: yup.number().positive().integer().required(),
  type: yup.string().matches(/(pizza|soup|sandwich)/),
  no_of_slices: yup.number().integer().positive(),
  diameter: yup.number().positive(),
});