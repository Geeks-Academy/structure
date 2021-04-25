import styled from 'styled-components';
import { colors } from 'styles/colors';

export const StyledUserSocialList = styled.ul`
  margin: 0;
`;

export const StyledAllSocialList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

export const StyledName = styled.span`
  font-size: 20px;
  color: ${colors.background.darkGray};
  margin-bottom: 100px;
`;
