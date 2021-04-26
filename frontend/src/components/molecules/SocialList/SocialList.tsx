import React from 'react';
import Social from './Social';
import { StyledImage } from './Social/Social.styled';
import { ISocialList } from './SocialList.model';
import { StyledAllSocialList, StyledName, StyledUserSocialList } from './SocialList.styled';

const SocialList = ({ userSocials, allSocials }: ISocialList): JSX.Element => {
  return (
    <div>
      <StyledName> Socials </StyledName>
      <StyledAllSocialList>
        {allSocials.map(({ _id, image }) => {
          return (
            <li key={_id}>
              <StyledImage src={image} />
            </li>
          );
        })}
      </StyledAllSocialList>
      <StyledUserSocialList>
        {userSocials.map(({ link, social }) => {
          return (
            // eslint-disable-next-line no-underscore-dangle
            <li key={social._id}>
              <Social link={link} social={social} />
            </li>
          );
        })}
      </StyledUserSocialList>
    </div>
  );
};

export default SocialList;
