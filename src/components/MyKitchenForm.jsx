import { Formik, Form, ErrorMessage, Field } from 'formik';
import { PizzaForm } from './PizzaForm';
import { SoapForm } from './SoapForm';
import { SandwichForm } from './SandwichForm';
import { useState, useEffect } from 'react';
import { schema } from './validationSchema';

export const MyKitchenForm = ({ onSubmit }) => {
  const [dishesType, setDishesType] = useState('');

  useEffect(() => {
    switch (dishesType) {
      case 'pizza':
        setDishesType('pizza');
        break;
      case 'soup':
        setDishesType('soup');
        break;
      case 'sandwich':
        setDishesType('sandwich');
        break;
      default:
        setDishesType('');
    }
  }, [dishesType]);

  const handleSelect = event => {
    const { value } = event.target;
    setDishesType(value);
    console.log(value);
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    const date = new Date(0);
    date.setMinutes(values.preparation_time);
    const timeString = date.toISOString().substr(11, 8);
    const formattedTime = timeString;

    let additionalData;
    switch (values.type) {
      case 'pizza':
        additionalData = {
          no_of_slices: values.no_of_slices,
          diameter: values.diameter,
        };
        break;

      case 'soup':
        additionalData = { spiciness_scale: values.spiciness_scale };
        break;
      case 'sandwich':
        additionalData = { slices_of_bread: values.slices_of_bread };
        break;

      default:
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
          spiciness_scale: '',
          slices_of_bread: '',
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
                <Field
                  name="type"
                  as="select"
                  value={dishesType}
                  required
                  onChange={handleSelect}
                >
                  <option value="empty">Select your favorite dish</option>
                  <option value="pizza">pizza</option>
                  <option value="soup">soup</option>
                  <option value="sandwich">sandwich</option>
                </Field>
              </label>
              {dishesType==="pizza" && <PizzaForm />}
              {dishesType==="soup" && <SoapForm />}
              {dishesType==="sandwich" && <SandwichForm />}

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
