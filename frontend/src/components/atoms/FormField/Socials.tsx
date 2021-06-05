// @ts-nocheck
import React, { useState } from 'react';
import { useController, FieldError, Control } from 'react-hook-form';
import ErrorMessage from 'components/atoms/ErrorMessage';
import { StyledSelectWrapper, StyledOption, StyledSelect, StyledLabel } from './Select.styled';
import { IUser } from '../../../Types/interfaces';
import { StyledInput } from './Input.styled';
import { useAsyncEffect } from '../../../hooks';
import { removeCurrentUser, replaceUserInfoIntoSelectOptions } from '../../../helpers';
import { SocialRequests } from '../../../Services/Requests/socials';

interface IProps {
  name: string;
  label: string;
  error?: FieldError;
  control: FormValues<socials[]>
}

const Socials = ({ control, name, label, error }: IProps): JSX.Element => {
  const {
    field: { ref, value, ...inputProps },
  } = useController({
    name,
    control,
  });

  return (
    <StyledSelectWrapper>
      <StyledLabel>{label}</StyledLabel>
      <div>
        {console.log(value)}
      {value.map(social => {
        console.log(social.social.name);

        return <img src={social.social.image} onClick={() => console.log(social.social.image)}/>
      })}
      </div>
      {value.map((val, idx) => {
        console.log(val.link);
        return (<StyledInput value={val.link} {...inputProps[idx]} inputRef={ref[idx]}>
        </StyledInput>)
      })}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </StyledSelectWrapper>
  );
};

export default Socials;
