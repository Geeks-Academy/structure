// @ts-nocheck
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { useController, FieldError, Control } from 'react-hook-form';
import { StyledError, StyledInput, StyledLabel } from './Input.styled';

interface IProps {
  name: string;
  label: string;
  error?: FieldError;
  control: Control<FormValues[name]>;
}

const CustomInput = ({ control, name, label, error }: IProps) => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    defaultValue: '',
  });

  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput variant="standard" {...inputProps} inputRef={ref} />
      {error && <StyledError>{error.message}</StyledError>}
    </div>
  );
};

export default CustomInput;
