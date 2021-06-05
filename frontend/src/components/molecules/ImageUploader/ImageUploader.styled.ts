import styled from 'styled-components';
import { colors } from 'styles/colors';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 500px;
  height: auto;
  margin: 15px 0;
`;

export const StyledLabel = styled.label`
  font-size: 20px;
  color: ${colors.background.darkGray};
`;

export const StyledImage = styled.img`
  margin: 10px 0;
`;

export const StyledInput = styled.input`
  display: none;
`;
