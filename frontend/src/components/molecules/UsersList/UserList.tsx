import React from "react";
import User from "./User";
import { IUsers } from "./UserList.model";
import { StyledList } from "./UserList.styled";

const UserList = ({ users }: IUsers): JSX.Element => {
  return (
    <StyledList>
      {users.map(({id, name, image}) => {
        return (
          <li>
            <User 
              id={id}
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
