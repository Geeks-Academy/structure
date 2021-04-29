import { useEffect, useState } from 'react';
import { SocialRequests } from 'Services';
import { ISocialPart } from 'Types/interfaces';
import Social from './Social';
import { StyledImage } from './Social/Social.styled';
import { ISocialList } from './SocialList.model';
import { StyledAllSocialList, StyledName, StyledUserSocialList } from './SocialList.styled';

const SocialList = ({ userSocials }: ISocialList): JSX.Element => {
  const [allSocials, setAllSocials] = useState<ISocialPart[]>([]);

  const { getAllSocials } = SocialRequests;
  useEffect(() => {
    getAllSocials().then(({ data }) => {
      setAllSocials(data);
    });
  }, [allSocials, setAllSocials, getAllSocials]);

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
