import { useHistory } from 'react-router';
import { IUser } from 'Types/interfaces';
import {
  StyledImage,
  StyledImageWrapper,
  StyledName,
  StyledUser,
  StyledUserIcon,
} from './User.styled';

const User = ({ _id, name, image }: IUser): JSX.Element => {
  const history = useHistory();

  const editUser = (id: string) => history.push(`/admin/edit/${id}`);

  console.log('elo');
  return (
    <StyledUser onClick={() => editUser(`${_id}`)}>
      <StyledImageWrapper>
        {image ? <StyledImage src={image} /> : <StyledUserIcon />}
      </StyledImageWrapper>
      <StyledName> {name} </StyledName>
    </StyledUser>
  );
};

export default User;
