import React from 'react';
import { IInput } from './Input.model';
import { StyledError, StyledInput, StyledLabel, StyledWrapper } from './Input.styled';

const Input = ({
  id,
  name,
  type,
  value,
  label,
  error,
  onBlur,
  errorId,
  required,
  onChange,
  placeholder,
  ariaInvalid,
  ...props
}: IInput): JSX.Element => {
  return (
    <StyledWrapper {...props}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        aria-describedby={errorId}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        defaultValue={value}
        {...props}
      />
      <StyledError id={errorId}>{error}</StyledError>
    </StyledWrapper>
  );
};
export default Input;
