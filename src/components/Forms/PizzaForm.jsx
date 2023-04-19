import {  ErrorMessage } from 'formik';
import {TitleLabel,InputField} from './MyKitchenForm.styled';

export const PizzaForm = ({ onSubmit }) => {
  return (
    <>
        <TitleLabel htmlFor="no_of_slices">
          How many slices?
          <InputField
            type="number"
            name="no_of_slices"
            title="no_of_slices"
            required
          />
          <ErrorMessage
            name="no_of_slices"
            render={<p>{'Incorrect no_of_slices'}</p>}
          />
        </TitleLabel>
        <TitleLabel htmlFor="diameter">
          Diameter
          <InputField type="number" name="diameter" title="diameter" required />
          <ErrorMessage
            name="diameter"
            render={msg => <p>{'Incorrect diameter'}</p>}
          />
        </TitleLabel>
    </>
  );
};