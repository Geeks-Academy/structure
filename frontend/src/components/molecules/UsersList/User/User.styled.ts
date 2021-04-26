import { UserIcon } from 'assets';
import { colors } from 'styles/colors';
import styled from 'styled-components';

export const StyledUser = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  background-color: white;
  padding: 10px;
  transition: 0.3s ease-in;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 5px 0.1px lightslategray;
  }
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  box-shadow: 0 0 5px 0.1px lightslategray;
`;

export const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const StyledUserIcon = styled(UserIcon)`
  width: 30px;
  height: 30px;
  path {
    fill: gray;
  }
`;

export const StyledName = styled.span`
  font-size: 24px;
  color: ${colors.background.darkGray};
`;
