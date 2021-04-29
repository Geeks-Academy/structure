import { IUser } from 'Types/interfaces';
import {
  StyledImage,
  StyledImageWrapper,
  StyledName,
  StyledUser,
  StyledUserIcon,
} from './User.styled';

const User = ({ name, image }: IUser): JSX.Element => {
  return (
    <StyledUser onClick={() => {}}>
      <StyledImageWrapper>
        {image ? <StyledImage src={image} /> : <StyledUserIcon />}
      </StyledImageWrapper>
      <StyledName> {name} </StyledName>
    </StyledUser>
  );
};

export default User;
