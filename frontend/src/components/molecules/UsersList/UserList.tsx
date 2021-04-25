import User from "./User";
import { isStartsWith } from "helpers";
import { IUsers } from "./UserList.model";
import { StyledList } from "./UserList.styled";

const UserList = ({ users, searchValue }: IUsers): JSX.Element => {
  return (
    <StyledList>
      {users.filter(user => isStartsWith(searchValue, user.name)).map(({_id, name, image}) => {
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
