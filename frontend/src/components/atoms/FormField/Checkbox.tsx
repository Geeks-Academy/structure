// @ts-nocheck
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { useController, FieldError, Control } from 'react-hook-form';
import { StyledInput, StyledLabel, StyledWrapper } from './Checkbox.styled';

interface IProps {
  name: string;
  label: string;
  error?: FieldError;
  control: Control<any>;
}

const CustomCheckbox = ({ control, name, label, error }: IProps) => {
  const {
    field: { ref, value, ...inputProps },
  } = useController({
    name,
    control,
  });

  return (
    <StyledWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...inputProps} inputRef={ref} checked={value} />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </StyledWrapper>
  );
};

export default CustomCheckbox;
