import { ErrorMessage } from 'formik';
import {
  TitleLabel,
  InputField,
  StyledErrorMessage,
  InputTitle,
} from './MyKitchenForm.styled';

export const PizzaForm = () => {
  return (
    <>
      <TitleLabel htmlFor="no_of_slices">
        <InputTitle>How many slices?</InputTitle>

        <InputField
          type="number"
          name="no_of_slices"
          title="no_of_slices"
          required
        />
        <ErrorMessage
          name="no_of_slices"
          render={msg => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        />
      </TitleLabel>
      <TitleLabel htmlFor="diameter">
        <InputTitle>Diameter</InputTitle>

        <InputField type="number" name="diameter" title="diameter" required />
        <ErrorMessage
          name="diameter"
          render={msg => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        />
      </TitleLabel>
    </>
  );
};
