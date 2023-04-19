import * as yup from 'yup';
 //Схема валидации
 export const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  preparation_time: yup.number().positive().integer().required(),
  type: yup.string().matches(/(pizza|soup|sandwich)/),
  no_of_slices: yup.number().integer().min(1).positive(),
  diameter: yup.number().positive(),
  spiciness_scale:yup.number().integer().positive().min(1),
  slices_of_bread:yup.number().integer().positive().min(1),
});