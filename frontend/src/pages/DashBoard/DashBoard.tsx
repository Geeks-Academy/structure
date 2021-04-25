import React, { useEffect, useState } from "react";
import {
  StyledBottomWrapper,
  StyledTopWrapper,
  StyledContainer,
  StyledButton,
  StyledTitle,
} from "./DashBoard.styled";

import { useHistory } from "react-router-dom";
import { UserRequests } from "Services";

import Input from "components/atoms/Input";
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
        <div className="flex justify-end items-center w-5/6">
          <Input
            label=""
            type="search"
            placeholder="Find user"
            className="m-0 mr-4 w-1/3 h-auto"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <StyledButton onClick={goToAddPanel}> Add new </StyledButton>
        </div>
      </StyledTopWrapper>
      <StyledBottomWrapper>
        <UsersList users={users} searchValue={searchValue} />
      </StyledBottomWrapper>
    </StyledContainer>
  );
};

export default DashBoard;
