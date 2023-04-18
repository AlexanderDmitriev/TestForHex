import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';

//Схема валидации
const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  preparation_time: yup.number().positive().integer().required(),
  type: yup.string().matches(/(pizza|soup|sandwich)/),
});

export const MyKitchenForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    const date = new Date(0);
    date.setMinutes(values.preparation_time);
    const timeString = date.toISOString().substr(11, 8);
    const formattedTime = timeString;
    const dataToSending = {
      name: values.name,
      preparation_time: formattedTime,
      type: values.type,
    };
    console.log(dataToSending);
    onSubmit(dataToSending);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', preparation_time: '', type:'' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <div>
            <Form onSubmit={handleSubmit}>
              <label htmlFor="name">
                Name
                <Field type="text" name="name" title="name" required />
                <ErrorMessage name="name" render={<p>{'Incorrect name'}</p>} />
              </label>
              <label htmlFor="preparation_time">
                preparation_time
                <Field
                  type="string"
                  name="preparation_time"
                  title="preparation_time"
                  required
                />
                <ErrorMessage
                  name="preparation_time"
                  render={msg => <p>{'Incorrect preparation_time'}</p>}
                />
              </label>
              <label htmlFor="type">
                type
                <Field name="type" as="select">
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="sandwich">sandwich</option>
              </Field>
              </label>
              
              <button type="submit" disabled={isSubmitting}>
                Let`s GO!`
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};
