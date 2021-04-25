import {
  StyledImageWrapper,
  StyledUserIcon,
  StyledImage,
  StyledUser,
  StyledName,
} from "./User.styled";

import { useHistory } from "react-router";
import { IUser } from "Types/interfaces";

const User = ({ _id, name, image }: IUser): JSX.Element => {
  const history = useHistory();

  const editUser = (id: string) => {
    history.push(`/admin/edit/${id}`);
  };

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
