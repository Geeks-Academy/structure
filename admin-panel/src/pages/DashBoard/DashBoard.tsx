import React from "react";
import UsersList from "components/molecules/UsersList";
import {
  StyledTopWrapper,
  StyledContainer,
  StyledButton,
  StyledTitle,
} from "./DashBoard.styled";
import { Users } from "Types/constants";

const DashBoard = (): JSX.Element => {
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

export default DashBoard;
