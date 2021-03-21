import React from "react";
import UsersList from "components/molecules/UsersList";
import {
  StyledTopWrapper,
  StyledContainer,
  StyledButton,
  StyledTitle,
} from "./UserBoard.styled";
import { Users } from "Types/constants";

const UsersBoard = (): JSX.Element => {
  return (
    <StyledContainer>
      <StyledTopWrapper>
        <StyledTitle> User list </StyledTitle>
        <StyledButton> Add new </StyledButton>
      </StyledTopWrapper>
      <UsersList users={Users} />
    </StyledContainer>
  );
};

export default UsersBoard;
