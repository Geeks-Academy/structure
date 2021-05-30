// @ts-nocheck
import React from 'react';
import { useController, FieldError, Control } from 'react-hook-form';
import ErrorMessage from 'components/atoms/ErrorMessage';
import { StyledSelectWrapper, StyledOption, StyledSelect, StyledLabel } from './Select.styled';
import { IUser } from '../../../Types/interfaces';
import { StyledInput } from './Input.styled';

interface IProps {
  name: string;
  label: string;
  error?: FieldError;
  control: FormValues<socials[]>
}

const Socials = ({ control, name, label, error }: IProps): JSX.Element => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
  });

  return (
    <StyledSelectWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...inputProps} inputRef={ref}>
        {control.defaultValuesRef.current.socials.map(social => {
          console.log(control.defaultValuesRef.current.socials);

          console.log(social);
          return <img/>
        })}
      </StyledInput>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </StyledSelectWrapper>
  );
};

export default Socials;
