import React from "react";
import { IInput } from "./InputWrapper.model";
import {
  StyledInput,
  StyledLabel,
  StyledContainer,
  StyledLeftWrapper,
  StyledErrorMessage,
  StyledRightWrapper,
} from "./InputWrapper.styled";

const InputField = ({
  name,
  type,
  value,
  label,
  error,
  onBlur,
  inputId,
  errorId,
  touched,
  onChange,
  isRequired,
  ariaInvalid,
  ...props
}: IInput) => {
  return (
    <StyledContainer {...props}>
      <StyledLeftWrapper>
        <StyledLabel> {label}</StyledLabel>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        <StyledInput
          id={inputId}
          name={name}
          type={type}
          value={value}
          aria-describedby={errorId}
          onChange={onChange}
          onBlur={onBlur}
          required={isRequired}
          error={!!error}
        />
        {error && touched && (
          <StyledErrorMessage id={errorId}> {error} </StyledErrorMessage>
        )}
      </StyledRightWrapper>
    </StyledContainer>
  );
};

export default InputField;
