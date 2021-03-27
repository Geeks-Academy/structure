import React from "react";
import UsersList from "components/molecules/UsersList";
import {
  StyledBottomWrapper,
  StyledTopWrapper,
  StyledContainer,
  StyledButton,
  StyledTitle,
} from "./DashBoard.styled";
import { Users } from "Types/constants";
import { useHistory } from "react-router-dom";

const DashBoard = (): JSX.Element => {
  const history = useHistory();
  const goToAddPanel = () => history.replace("/admin/add");

  return (
    <StyledContainer>
      <StyledTopWrapper>
        <StyledTitle> User list </StyledTitle>
        <StyledButton onClick={goToAddPanel}> Add new </StyledButton>
      </StyledTopWrapper>
      <StyledBottomWrapper>
        <UsersList users={Users} />
      </StyledBottomWrapper>
    </StyledContainer>
  );
};

export default DashBoard;
