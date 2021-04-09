import React, { useEffect, useState } from "react";
import {
  StyledBottomWrapper,
  StyledTopWrapper,
  StyledContainer,
  StyledButton,
  StyledTitle,
} from "./DashBoard.styled";

import { useHistory } from "react-router-dom";
import { getAllUsers } from "Services";
import { IUser } from "Types/interfaces";
import { isInputTextMatch } from "helpers";

import Input from "components/atoms/Input";
import UsersList from "components/molecules/UsersList";

const DashBoard = (): JSX.Element => {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [mutableUsers, setMutableUsers] = useState<IUser[]>([]);

  const goToAddPanel = () => history.replace("/admin/add");

  useEffect(() => {
    getAllUsers().then(({ data }) => {
      setUsers(data);
      setMutableUsers(data);
    });
  }, [setUsers]);

  const filteredUsers = (
    users: IUser[],
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    const filteredUsers = users.filter((item) =>
      isInputTextMatch(inputValue, `${item.name}`)
    );
    inputValue ? setMutableUsers(filteredUsers) : setMutableUsers(users);
  };

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
            onChange={(e) => filteredUsers(users, e)}
          />
          <StyledButton onClick={goToAddPanel}> Add new </StyledButton>
        </div>
      </StyledTopWrapper>
      <StyledBottomWrapper>
        <UsersList users={mutableUsers} />
      </StyledBottomWrapper>
    </StyledContainer>
  );
};

export default DashBoard;
