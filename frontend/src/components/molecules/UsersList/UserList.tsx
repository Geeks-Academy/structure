import React from "react";
import User from "./User";
import { IUsers } from "./UserList.model";
import { StyledList } from "./UserList.styled";

const UserList = ({ users }: IUsers): JSX.Element => {
  return (
    <StyledList>
      {users.map(({_id, name, image}) => {
        return (
          <li key={_id}>
            <User 
              _id={_id}
              name={name}
              image={image}
            />
          </li>
        );
      })}
    </StyledList>
  );
};

export default UserList;
