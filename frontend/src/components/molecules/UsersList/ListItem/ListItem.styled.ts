import { UserIcon } from "assets";
import Button from "components/atoms/Button";
import styled, { keyframes } from "styled-components";
import { colors } from "styles/colors";

const buttonAnimation = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;
export const StyledListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
  path {
    fill: gray;
  }
  width: 30px;
  height: 30px;
`;


export const StyledName = styled.span`
  font-size: 24px;
  color: gray;
`;





export const StyledPropertiesWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: fit-content;
`;

export const StyleButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: fit-content;
`;

export const StyledRow = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: gray;
  line-height: 1.35;
`;

export const StyledStrong = styled.strong`
  font-weight: bold;
  color: black;
  margin-right: 5px;
`;

export const StyledCounter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  width: 40px;
`;

export const StyledEditButton = styled(Button)`
  background-color: ${colors.background.orange};
  width: 80px;
  margin-bottom: 10px;
  animation: ${buttonAnimation} 0.3s ease-in;
`;

export const StyledDeleteButton = styled(Button)`
  background-color: ${colors.background.red};
  width: 80px;
  margin-bottom: 10px;
  animation: ${buttonAnimation} 0.3s ease-in;
`;

export const StyledUpdateButton = styled(Button)`
  background-color: ${colors.background.blue};
  width: 80px;
  animation: ${buttonAnimation} 0.3s ease-in;
`;
