import { ErrorMessage, Field } from 'formik';

export const SoapForm = () => {
  return (
    <>
      <label htmlFor="spiciness_scale">
        spiciness_scale
        <Field
          type="range"
          min="1"
          max="10"
          step="1"
          name="spiciness_scale"
          title="spiciness_scale"
          required
        />
        <ErrorMessage
          name="spiciness_scale"
          render={<p>{'Incorrect spiciness_scale'}</p>}
        />
      </label>
    </>
  );
};
