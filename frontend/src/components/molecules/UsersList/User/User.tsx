import React from "react";
import {
  StyledImageWrapper,
  StyledUserIcon,
  StyledImage,
  StyledUser,
  StyledName,
} from "./User.styled";

import { useHistory } from "react-router";
import { IUser } from "Types/interfaces";

const User = ({ id, name, image }: IUser): JSX.Element => {
  const history = useHistory();
  // const [edition, setEdition] = useState(false);
  // const [buttonVisibility, setButtonVisibility] = useState(false);
  // const [isActive, setActive] = useState(false);
  // const [modalDescription, setModalDescription] = useState("");
  // const [modalTitle, setModalTitle] = useState<TButton>("Delete");

  // const handleButton = (title: TButton, description: string) => {
  //   setActive(true);
  //   setModalTitle(title);
  //   setModalDescription(description);
  // };

  // const handleCancel = () => {
  //   setActive(false);
  // };

  // const handleConfirm = () => {};

  const editUser = (id: string) => {
    history.push(`/admin/edit/${id}`);
  };

  return (
    <StyledUser onClick={() => editUser(id)}>
      {image ? (
        <StyledImageWrapper>
          <StyledImage src={image} />
        </StyledImageWrapper>
      ) : (
        <StyledImageWrapper>
          <StyledUserIcon />
        </StyledImageWrapper>
      )}
      <StyledName> {name} </StyledName>
    </StyledUser>
  );
};

export default User;
