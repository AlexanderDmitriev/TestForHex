import { Formik, Form, ErrorMessage, Field } from 'formik';
import { PizzaForm } from './PizzaForm';
import { useState } from 'react';
import {schema} from './validationSchema';

export const MyKitchenForm = ({ onSubmit }) => {
  const [dishesType, setDishesType] = useState('');

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    const date = new Date(0);
    date.setMinutes(values.preparation_time);
    const timeString = date.toISOString().substr(11, 8);
    const formattedTime = timeString;

    let additionalData;
    switch (values.type) {
      case 'pizza':
        setDishesType('pizza');
        additionalData = {
          no_of_slices: values.no_of_slices,
          diameter: values.diameter,
        };
        break;

      case 'soup':
        setDishesType('soup');
        additionalData = null;
        break;
      case 'sandwich':
        setDishesType('sandwich');
        additionalData = null;
        break;

      default:
        setDishesType('');
        additionalData = null;
    }
    const dataToSending = {
      name: values.name,
      preparation_time: formattedTime,
      type: values.type,
      ...additionalData,
    };
    console.log(dataToSending);
    console.log(dishesType);
    onSubmit(dataToSending);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          preparation_time: '',
          type: '',
          no_of_slices: '',
          diameter: '',
        }}
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
                <Field name="type" as="select"   required>
                <option value="empty" >Select your favorite dish</option>
                  <option value="pizza">pizza</option>
                  <option value="soup">soup</option>
                  <option value="sandwich">sandwich</option>
                </Field>
              </label>
              {/* {dishesType==="pizza" && <PizzaForm />} */}
              <PizzaForm />

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
