import Button from "components/atoms/Button";
import styled from "styled-components";

export const StyledContainer = styled.div`
  border-radius: 4px;
`;

export const StyledTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 10px;
`;

export const StyledTitle = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

export const StyledButton = styled(Button)`
  width: 120px;
  height: 40px;
  color: white;
  font-weight: bold;
  background-color: #5CB85C;
  border-radius: 4px;
`;
