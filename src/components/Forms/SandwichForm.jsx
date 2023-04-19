import {  ErrorMessage, Field } from 'formik';

export const SandwichForm = () => {

  return (
    <>
        <label htmlFor="slices_of_bread">
        slices_of_bread
          <Field
            type="number"
            name="slices_of_bread"
            title="slices_of_bread"
            required
          />
          <ErrorMessage
            name="slices_of_bread"
            render={<p>{'Incorrect slices_of_bread'}</p>}
          />
        </label>
    </>
  );
};
