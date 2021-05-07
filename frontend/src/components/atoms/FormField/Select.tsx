// @ts-nocheck
import React from 'react';
import { useController, FieldError, Control } from 'react-hook-form';
import ErrorMessage from 'components/atoms/ErrorMessage';
import { StyledSelectWrapper, StyledOption, StyledSelect, StyledLabel } from './Select.styled';

interface IOption {
  name: string;
  value: string;
}

interface IProps {
  name: string;
  label: string;
  options: IOption[];
  error?: FieldError;
  control: Control<any>;
}

const CustomSelect = ({ control, name, label, options, error }: IProps): JSX.Element => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
  });

  return (
    <StyledSelectWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect {...inputProps} inputRef={ref}>
        <StyledOption value="">-- Choose a value --</StyledOption>
        {options.map((option: IOption) => (
          <StyledOption key={option.value} value={option.value}>
            {option.name}
          </StyledOption>
        ))}
      </StyledSelect>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </StyledSelectWrapper>
  );
};

export default CustomSelect;
