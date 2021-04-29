import { ChangeEvent, useState } from 'react';
import UsersList from 'components/molecules/UsersList';
import {
  StyledBottomWrapper,
  StyledButton,
  StyledContainer,
  StyledInput,
  StyledRightWrapper,
  StyledTitle,
  StyledTopWrapper,
} from './DashBoard.styled';

const DashBoard = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <StyledContainer>
      <StyledTopWrapper>
        <StyledTitle> User list </StyledTitle>
        <StyledRightWrapper>
          <StyledInput
            label=""
            type="search"
            placeholder="Find user"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
          />
          <StyledButton onClick={() => {}}> Add new </StyledButton>
        </StyledRightWrapper>
      </StyledTopWrapper>
      <StyledBottomWrapper>
        <UsersList searchValue={searchValue} />
      </StyledBottomWrapper>
    </StyledContainer>
  );
};

export default DashBoard;
