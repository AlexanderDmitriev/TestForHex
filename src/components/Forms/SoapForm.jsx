import { ErrorMessage } from 'formik';
import {
  TitleLabel,
  RangeSelect,
  StyledErrorMessage,
  InputTitle,
} from './MyKitchenForm.styled';

export const SoapForm = ({ spiceLevel, setSpiceLevel }) => {
  const handleChange = event => {
    const { value } = event.target;
    setSpiceLevel(value);
  };

  return (
    <>
      <TitleLabel htmlFor="spiciness_scale">
        <InputTitle>Your spiciness scale is {spiceLevel}</InputTitle>

        <RangeSelect
          type="range"
          min="1"
          max="10"
          step="1"
          name="spiciness_scale"
          title="spiciness_scale"
          value={spiceLevel}
          onChange={handleChange}
          required
        />
        <ErrorMessage
          name="spiciness_scale"
          render={msg => <StyledErrorMessage>{msg}</StyledErrorMessage>}
        />
      </TitleLabel>
    </>
  );
};
