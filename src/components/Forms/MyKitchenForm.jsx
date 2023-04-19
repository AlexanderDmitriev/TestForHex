import { Formik, Form, ErrorMessage } from 'formik';
import { PizzaForm } from './PizzaForm';
import { SoapForm } from './SoapForm';
import { SandwichForm } from './SandwichForm';
import { schema } from '../validationSchema';
import { timeFormatter } from '../timeFormatter';
import { dataFormatting } from '../dataFormatting';
import {
  InputField,
  TitleLabel,
  Container,
  InputFieldsSection, LetsGoButton,
} from './MyKitchenForm.styled';
import { useState } from 'react';

export const MyKitchenForm = ({ dishesType, handleSelect, onSubmit }) => {
  const [spiceLevel, setSpiceLevel] = useState(1);
  const handleSubmit = (values, { resetForm }) => {
    const formattedTime = timeFormatter(values);
    const dataToSending = dataFormatting(
      values,
      dishesType,
      formattedTime,
      spiceLevel
    );
    onSubmit(dataToSending);
    resetForm();
  };

  return (
    <Container>
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
              <InputFieldsSection>
                <div>
                  <TitleLabel htmlFor="name">
                    Your dish
                    <InputField type="text" name="name" title="name" required />
                    <ErrorMessage
                      name="name"
                      render={<p>{'Incorrect name'}</p>}
                    />
                  </TitleLabel>
                  <TitleLabel htmlFor="preparation_time">
                    Preparation time in minutes
                    <InputField
                      type="string"
                      name="preparation_time"
                      title="preparation_time"
                      required
                    />
                    <ErrorMessage
                      name="preparation_time"
                      render={msg => <p>{'Incorrect preparation_time'}</p>}
                    />
                  </TitleLabel>
                  <TitleLabel htmlFor="type">
                    Type of your dish
                    <InputField
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
                    </InputField>
                  </TitleLabel>
                </div>
                {dishesType === 'pizza' && <PizzaForm />}
                {dishesType === 'soup' && (
                  <SoapForm
                    spiceLevel={spiceLevel}
                    setSpiceLevel={setSpiceLevel}
                  />
                )}
                {dishesType === 'sandwich' && <SandwichForm />}
              </InputFieldsSection>

              <LetsGoButton type="submit" disabled={isSubmitting}>
                Let`s GO!`
              </LetsGoButton>
            </Form>
          </div>
        )}
      </Formik>
    </Container>
  );
};
