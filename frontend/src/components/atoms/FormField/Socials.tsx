// @ts-nocheck
import React, { useState } from 'react';
import { FieldError, useFieldArray, UseFormGetValues } from 'react-hook-form';
import ErrorMessage from 'components/atoms/ErrorMessage';
import { Tooltip } from '@material-ui/core';
import {
  StyledLabel,
  StyledSelectWrapper,
  StyledSocialIcon,
  StyledSocialWrapper,
} from './Select.styled';
import { StyledInput } from './Input.styled';
import { IUser, ISocial } from '../../../Types/interfaces';

interface IProps {
  name: string;
  label: string;
  error?: FieldError;
  control: FormValues<socials[]>;
  register: UseFormRegister<IUser>;
  getValues: UseFormGetValues<IUser>;
  socials: ISocial[];
}

const Socials = ({
  control,
  name,
  label,
  error,
  register,
  getValues,
  socials,
}: IProps): JSX.Element => {
  useFieldArray({
    control,
    name,
  });

  const [clickedIdx, setClickedIdx] = useState(null);

  return (
    <StyledSelectWrapper>
      <StyledLabel>{label}</StyledLabel>
      <div>
        {socials.map((social, idx) => {
          if (clickedIdx !== idx) {
            return (
              <Tooltip title={social.social.name} placement="top">
                <StyledSocialIcon
                  key={social.id}
                  src={social.social.image}
                  onClick={() => setClickedIdx(idx)}
                />
              </Tooltip>
            );
          }
          return null;
        })}
      </div>
      {socials.map((val, idx) => {
        if (clickedIdx === idx) {
          return (
            <StyledSocialWrapper>
              <Tooltip title={val.social.name} placement="left">
                <StyledSocialIcon
                  src={val.social.image}
                  key={val.social._id}
                  onClick={() => setClickedIdx(null)}
                />
              </Tooltip>
              <StyledInput
                key={val.social._id}
                defaultValue={getValues(`${name}.${idx}.link`)}
                {...register(`${name}.${idx}.link`)}
              />
              <input type="hidden" value={val.social._id} {...register(`${name}.${idx}.social`)} />
            </StyledSocialWrapper>
          );
        }
        return null;
      })}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </StyledSelectWrapper>
  );
};

export default Socials;
