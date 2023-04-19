import {  ErrorMessage, Field } from 'formik';
/* import * as yup from 'yup'; */

export const PizzaForm = ({ onSubmit }) => {
  /* const pizzaSchema = yup.object().shape({
    no_of_slices: yup.number().integer().positive().required(),
    diameter: yup.number().positive().required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };
 */
  return (
    <>
        <label htmlFor="no_of_slices">
          no_of_slices
          <Field
            type="number"
            name="no_of_slices"
            title="no_of_slices"
            required
          />
          <ErrorMessage
            name="no_of_slices"
            render={<p>{'Incorrect no_of_slices'}</p>}
          />
        </label>
        <label htmlFor="diameter">
          diameter
          <Field type="number" name="diameter" title="diameter" required />
          <ErrorMessage
            name="diameter"
            render={msg => <p>{'Incorrect diameter'}</p>}
          />
        </label>
    </>
  );
};
