// @ts-nocheck
import React, { useState } from 'react';
import { FieldError, useFieldArray } from 'react-hook-form';
import { SocialRequests } from 'Services';
import ErrorMessage from 'components/atoms/ErrorMessage';
import { Tooltip } from '@material-ui/core';
import { StyledLabel, StyledSelectWrapper, StyledSocialIcon, StyledSocialWrapper } from './Select.styled';
import { StyledInput } from './Input.styled';
import { useAsyncEffect } from '../../../hooks';
import { IUser } from '../../../Types/interfaces';

interface IProps {
  name: string;
  label: string;
  error?: FieldError;
  control: FormValues<socials[]>;
  register: UseFormRegister<IUser>;
}

const { getAllSocials } = SocialRequests;

const Socials = ({ control, name, label, error, register }: IProps): JSX.Element => {

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name, // unique name for your Field Array
  });

  const [allSocials, setAllSocials] = useState([]);
  const [clickedIdx, setClickedIdx] = useState(null);

  useAsyncEffect(async () => {
    const socials = await getAllSocials();
    setAllSocials(socials.data);
  });

  return (
    <StyledSelectWrapper>
      <StyledLabel>{label}</StyledLabel>
      <div>
        {allSocials && allSocials.map((social, idx) => {
          if (clickedIdx !== idx) {
            return (<Tooltip title={social.name}><StyledSocialIcon key={social.id} src={social.image}
                                                                   onClick={() => setClickedIdx(idx)}/></Tooltip>);
          }
          return null;
        })}
      </div>
      {allSocials && allSocials.map((val, idx) => {
        if (clickedIdx === idx) {
          return (<StyledSocialWrapper>
            <StyledSocialIcon src={val.image} key={val._id}
                              onClick={() => setClickedIdx(null)}/>
            <StyledInput onChange={e => console.log(e.target.value)}
                         defaultValue={fields && fields.map(field => {
                           if (field.social.name === val.name) {
                             return field.link;
                           }
                           return null;
                         }).join('')
                         }
                         {...register(`${name}.${idx}.link`)}
            />
            <input type="hidden" value={val._id} {...register(`${name}.${idx}.social`)} />
          </StyledSocialWrapper>);
        }
        return null;
      })}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </StyledSelectWrapper>
  );
};

export default Socials;
