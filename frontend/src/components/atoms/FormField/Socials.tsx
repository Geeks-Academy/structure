// @ts-nocheck
import React, { useState } from 'react';
import { FieldError, useFieldArray, UseFormGetValues } from 'react-hook-form';
import { SocialRequests } from 'Services';
import ErrorMessage from 'components/atoms/ErrorMessage';
import { Tooltip } from '@material-ui/core';
import {
  StyledLabel,
  StyledSelectWrapper,
  StyledSocialIcon,
  StyledSocialWrapper,
} from './Select.styled';
import { StyledInput } from './Input.styled';
import { useAsyncEffect } from '../../../hooks';
import { ISocial, ISocialPart, IUser } from '../../../Types/interfaces';

interface IProps {
  name: string;
  label: string;
  error?: FieldError;
  control: FormValues<socials[]>;
  register: UseFormRegister<IUser>;
  getValues: UseFormGetValues<IUser>;
  currentUser: IUser;
}

const Socials = ({
  control,
  name,
  label,
  error,
  register,
  getValues,
  currentUser,
}: IProps): JSX.Element => {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name, // unique name for your Field Array
  });

  const [clickedIdx, setClickedIdx] = useState(null);

  return (
    <StyledSelectWrapper>
      <StyledLabel>{label}</StyledLabel>
      <div>
        {currentUser &&
          currentUser.socials.map((social, idx) => {
            if (clickedIdx !== idx) {
              return (
                <Tooltip title={social.social.name}>
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
      {currentUser &&
        currentUser.socials.map((val, idx) => {
          if (clickedIdx === idx) {
            return (
              <StyledSocialWrapper>
                <StyledSocialIcon
                  src={val.social.image}
                  key={val.social._id}
                  onClick={() => setClickedIdx(null)}
                />
                <StyledInput
                  key={val.social._id}
                  defaultValue={getValues(`${name}.${idx}.link`)}
                  {...register(`${name}.${idx}.link`)}
                />
                <input
                  type="hidden"
                  value={val.social._id}
                  {...register(`${name}.${idx}.social`)}
                />
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
