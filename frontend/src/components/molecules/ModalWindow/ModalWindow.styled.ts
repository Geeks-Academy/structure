import Button from 'components/atoms/Button';
import styled from 'styled-components';
import { increaseOpacity } from 'styles/animations';
import { colors } from 'styles/colors';
import { ButtonTitle } from 'Types/enums';

const handleButtonColor = (buttonTitle: string) => {
  if (buttonTitle === ButtonTitle.DELETE) {
    return colors.background.red;
  }
  return colors.background.blue;
};

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${increaseOpacity} 0.3s ease-in both;
  z-index: 99999;
`;

export const StyledWindow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 220px;
  width: 380px;
  border-radius: 8px;
  background-color: white;
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 100%;
  :first-of-type {
    flex: 1.5;
    border-bottom: 2px solid lightgray;
    justify-content: flex-start;
    padding-left: 20px;
  }

  :nth-of-type(2) {
    flex: 3;
    background-color: white;
    padding: 5px 10px;
    border-bottom: 2px solid lightgray;
  }

  :nth-of-type(3) {
    flex: 1.5;
    justify-content: space-between;
    padding: 5px 10px;
  }
`;

export const StyledButton = styled(Button)<{ title: string }>`
  background-color: ${({ title }) => handleButtonColor(title)};
`;

export const StyledOutlineButton = styled(Button)`
  background-color: #656565;
`;

export const StyledParagraph = styled.p`
  color: black;
  font-size: 24px;
`;

export const StyledTitle = styled.span`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;
