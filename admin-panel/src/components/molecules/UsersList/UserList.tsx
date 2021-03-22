import React from "react";
import ListItem from "./ListItem";
import { IUserList } from "./UserList.model";
import { StyledList } from "./UserList.styled";

const UserList = ({ users }: IUserList): JSX.Element => {
  return (
    <StyledList>
      {users.map((user) => {
        return <ListItem user={user} />;
      })}
    </StyledList>
  );
};

export default UserList;
