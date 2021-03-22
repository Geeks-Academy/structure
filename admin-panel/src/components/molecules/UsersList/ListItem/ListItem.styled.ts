import Button from "components/atoms/Button";
import styled, { keyframes } from "styled-components";

const buttonAnimation = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`
export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px;
  transition: .3s ease-in;
  :hover {
    box-shadow: 0 0 5px .1px lightslategray;
  }
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
  background-color: #F0AD4E;
  width: 80px;
  margin-bottom: 10px;
  animation: ${buttonAnimation} .3s ease-in;
`;

export const StyledDeleteButton = styled(Button)`
  background-color: #D9534F;
  width: 80px;
  margin-bottom: 10px;
  animation: ${buttonAnimation} .3s ease-in;
`;

export const StyledUpdateButton = styled(Button)`
  background-color: #0375D8;
  width: 80px;
  animation: ${buttonAnimation} .3s ease-in;
`;