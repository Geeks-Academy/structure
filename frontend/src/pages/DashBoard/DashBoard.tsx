import React, { ChangeEvent, useEffect, useState } from "react";
import {
  StyledBottomWrapper,
  StyledRightWrapper,
  StyledTopWrapper,
  StyledContainer,
  StyledButton,
  StyledInput,
  StyledTitle,
} from "./DashBoard.styled";

import { useHistory } from "react-router-dom";
import { UserRequests } from "Services";

import UsersList from "components/molecules/UsersList";

const DashBoard = (): JSX.Element => {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { getAllUsers } = UserRequests;

  const goToAddPanel = () => history.replace("/admin/add");

  useEffect(() => {
    getAllUsers().then(({ data }) => {
      setUsers(data);
    });
  }, [setUsers, getAllUsers]);

  return (
    <StyledContainer>
      <StyledTopWrapper>
        <StyledTitle> User list </StyledTitle>
        <StyledRightWrapper>
          <StyledInput
            label=""
            type="search"
            placeholder="Find user"
            onChange={(e:ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
          />
          <StyledButton onClick={goToAddPanel}> Add new </StyledButton>
        </StyledRightWrapper>
      </StyledTopWrapper>
      <StyledBottomWrapper>
        <UsersList users={users} searchValue={searchValue} />
      </StyledBottomWrapper>
    </StyledContainer>
  );
};

export default DashBoard;
