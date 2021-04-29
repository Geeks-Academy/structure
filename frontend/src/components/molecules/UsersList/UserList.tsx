import { useEffect, useState } from 'react';
import { isStartsWith } from 'helpers';
import { UserRequests } from 'Services';
import { IUser } from 'Types/interfaces';
import { IUsers } from './UserList.model';
import { StyledList } from './UserList.styled';
import User from './User';

const UserList = ({ searchValue }: IUsers): JSX.Element => {
  const [users, setUsers] = useState<IUser[]>([]);
  const { getAllUsers } = UserRequests;

  useEffect(() => {
    getAllUsers().then(({ data }) => {
      setUsers(data);
    });
  }, [setUsers, getAllUsers]);

  return (
    <StyledList>
      {users
        .filter((user) => isStartsWith(searchValue, user.name))
        .map(({ _id, name, image }) => {
          return (
            <li key={_id}>
              <User _id={_id} name={name} image={image} />
            </li>
          );
        })}
    </StyledList>
  );
};

export default UserList;
