import {  ErrorMessage } from 'formik';
import {TitleLabel,InputField} from './MyKitchenForm.styled';

export const SandwichForm = () => {

  return (
    <>
        <TitleLabel htmlFor="slices_of_bread">
        How many slices of bread?
          <InputField
            type="number"
            name="slices_of_bread"
            title="slices_of_bread"
            required
          />
          <ErrorMessage
            name="slices_of_bread"
            render={<p>{'Incorrect slices_of_bread'}</p>}
          />
        </TitleLabel>
    </>
  );
};
