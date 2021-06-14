import styled from 'styled-components';
import { colors } from 'styles/colors';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 15px 0;
`;
export const StyledImageWrapper = styled.div`
  position: relative;
  height: 200px;
`;

export const StyledLabel = styled.label`
  font-size: 20px;
  color: ${colors.background.darkGray};
  margin-bottom: 5px;
`;

export const StyledButtonLabel = styled.label`
  position: absolute;
  bottom: -5px;
  right: -5px;
  font-size: 20px;
  background-color: ${colors.background.white};
  border-radius: 5px;
  margin: 0;
  span {
    padding: 0;
  }
`;

export const StyledImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 5px;
`;

export const StyledInput = styled.input`
  display: none;
`;
