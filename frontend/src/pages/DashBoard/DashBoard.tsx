import { ChangeEvent, useState } from 'react';
import UsersList from 'components/molecules/UsersList';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');

  const goToAddPanel = () => history.replace('/admin/add');

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
          <StyledButton onClick={goToAddPanel}> Add new </StyledButton>
        </StyledRightWrapper>
      </StyledTopWrapper>
      <StyledBottomWrapper>
        <UsersList searchValue={searchValue} />
      </StyledBottomWrapper>
    </StyledContainer>
  );
};

export default DashBoard;
