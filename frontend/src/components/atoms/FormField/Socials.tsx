// @ts-nocheck
import React, { useState } from 'react';
import { useController, FieldError, Control } from 'react-hook-form';
import ErrorMessage from 'components/atoms/ErrorMessage';
import { StyledSelectWrapper, StyledOption, StyledSelect, StyledLabel, StyledSocialWrapper, StyledSocialIcon } from './Select.styled';
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

  const [clickedIdx, setClickedIdx] = useState(null);

  return (
    <StyledSelectWrapper>
      <StyledLabel>{label}</StyledLabel>
      <div>
        {console.log(value)}
      {value.map((social, idx) => {
        console.log(social.social.name);
        if (clickedIdx !== idx) {
          return (<StyledSocialIcon src={social.social.image} onClick={() => setClickedIdx(idx)} />)
        }
        return null;
      })}
      </div>
      {value.map((val, idx) => {
        console.log(val.link);
        if (clickedIdx === idx) {
          return (<StyledSocialWrapper><StyledSocialIcon src={val.social.image} /><StyledInput defaultValue={val.link} {...inputProps[idx]} inputRef={ref[idx]} /></StyledSocialWrapper>)
        }
        return null;
      })}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </StyledSelectWrapper>
  );
};

export default Socials;
