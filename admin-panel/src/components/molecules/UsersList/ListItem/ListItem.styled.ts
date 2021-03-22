import Button from "components/atoms/Button";
import styled from "styled-components";

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

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px;
`;

export const StyledRow = styled.p`
  display: flex;
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
`;

export const StyledDeleteButton = styled(Button)`
  background-color: #D9534F;
  width: 80px;
`;
