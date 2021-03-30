import React, { useEffect, useState } from "react";
import UsersList from "components/molecules/UsersList";
import {
  StyledBottomWrapper,
  StyledTopWrapper,
  StyledContainer,
  StyledButton,
  StyledTitle,
} from "./DashBoard.styled";
import { useHistory } from "react-router-dom";
import { getAllUsers } from "Services/requests";

const DashBoard = (): JSX.Element => {
  const history = useHistory();
  const [users, setUsers] = useState([])
  
  const goToAddPanel = () => history.replace("/admin/add");
  
  useEffect(() => {
    getAllUsers().then(({data}) => {
      setUsers(data)
    })
  }, [setUsers])

  return (
    <StyledContainer>
      <StyledTopWrapper>
        <StyledTitle> User list </StyledTitle>
        <StyledButton onClick={goToAddPanel}> Add new </StyledButton>
      </StyledTopWrapper>
      <StyledBottomWrapper>
        <UsersList users={users} />
      </StyledBottomWrapper>
    </StyledContainer>
  );
};

export default DashBoard;
