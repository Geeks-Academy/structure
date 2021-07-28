// @ts-nocheck
import React, { useState } from 'react';
import { FieldError, useFieldArray, UseFormGetValues, UseFormWatch } from 'react-hook-form';
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
  setValue?: UseSetValue<IUser>;
  socials: ISocial[];
}

const Socials = ({
  control,
  name,
  label,
  error,
  register,
  getValues,
  setValue,
  socials,
}: IProps): JSX.Element => {
  useFieldArray({
    control,
    name,
  });

  const [effectiveSocials, setEffectiveSocials] = useState<ISocial>([]);
  const [availableSocials, setAvailableSocials] = useState<ISocial>([]);

  const moveSocial = (social, reverse) => {
    if (!reverse) {
      setEffectiveSocials((prev) => [social, ...prev]);
      setAvailableSocials((prev) => prev.filter((s) => social.social._id !== s.social._id));
    } else {
      setAvailableSocials((prev) => {
        social.link = '';
        return [social, ...prev];
      });
      setEffectiveSocials((prev) => prev.filter((s) => social.social._id !== s.social._id));
    }
  };

  React.useEffect(() => {
    setEffectiveSocials(socials.filter((social) => !!social.link));
    setAvailableSocials(socials.filter((social) => !social.link));
  }, [socials]);

  return (
    <StyledSelectWrapper>
      <StyledLabel>{label}</StyledLabel>
      <div>
        {availableSocials.map((social) => {
          return (
            <Tooltip title={social.social.name} placement="top">
              <StyledSocialIcon
                key={social.id}
                src={social.social.image}
                onClick={() => moveSocial(social)}
              />
            </Tooltip>
          );
        })}
      </div>
      {effectiveSocials.map((val) => {
        const indexOfSocial = socials.indexOf(val);
        return (
          <StyledSocialWrapper>
            <Tooltip title={val.social.name} placement="left">
              <StyledSocialIcon
                src={val.social.image}
                key={val.social._id}
                onClick={() => {
                  moveSocial(val, true);
                  setValue(`${name}.${indexOfSocial}.link`);
                }}
              />
            </Tooltip>
            <StyledInput
              key={val.social._id}
              defaultValue={getValues(`${name}.${indexOfSocial}.link`)}
              {...register(`${name}.${indexOfSocial}.link`)}
            />
            <input
              type="hidden"
              value={val.social._id}
              {...register(`${name}.${indexOfSocial}.social`)}
            />
          </StyledSocialWrapper>
        );
      })}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </StyledSelectWrapper>
  );
};

export default Socials;
