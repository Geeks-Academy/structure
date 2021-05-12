import { useState } from 'react';
import { isStartsWith } from 'helpers';
import { UserRequests } from 'Services';
import { useAsyncEffect } from 'hooks';

import { StyledList } from './UserList.styled';
import User from './User';

interface IUser {
  _id: string;
  name: string;
  image: string;
}

interface IProps {
  searchValue: string;
}

const UserList = ({ searchValue }: IProps): JSX.Element => {
  const [users, setUsers] = useState<IUser[]>([]);

  useAsyncEffect(async () => {
    const users = await UserRequests.getAllUsers();
    setUsers(users.data);
  });

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
