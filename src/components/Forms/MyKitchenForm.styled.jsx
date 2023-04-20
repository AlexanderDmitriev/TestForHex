import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.section`
  min-height: 125px;
  padding: 15px;
  border: 1px solid #547fe7;
  border-radius: 15px;
  margin: 0 auto;
  box-shadow: 5px 5px 4px 1px rgba(0, 0, 0, 0.3);
  width: 90vw;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
`;

export const InputFieldsSection = styled.div`
  display: block;
`;

export const InputField = styled(Field)`
  border: 2px solid #547fe7;
  border-radius: 5px;
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
  padding: 4px;
  margin: 4px 10px;
  min-width: 150px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin: 4px 15px;
  }
  :focus,
  :hover {
    border-color: #418b77;
  }
`;

export const RangeSelect = styled(Field)`
  display: block;
  padding: 4px;
  margin: 0 15px;
  min-width: 150px;
  :focus,
  :hover {
    border-color: #418b77;
  }
`;

export const TitleLabel = styled.label`
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
  color: #191924;
  cursor: pointer;
  text-align: center;
  height: 35px;
  padding: 4px 8px;
  display: flex;
  justify-content: flex-start;
  transition-property: color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: linear;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  &:hover,
  &:focus {
    color: #418b77;
  }
`;

export const InputTitle = styled.span`
  width: 35%;
  display: flex;
`;

export const LetsGoButton = styled.button`
  background-color: #547fe7;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-family: Raleway, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 110%;
  /* or 26px */
  display: flex;
  color: #ffffff;
  display: inline;
  text-decoration: none;
  :hover {
    background-color: #418b77;
  }
`;

export const StyledErrorMessage = styled.p`
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.2;
  color: red;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
