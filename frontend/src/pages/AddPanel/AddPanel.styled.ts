import styled from "styled-components";
import Button from "components/atoms/Button";

export const StyledContainer = styled.div`
  box-shadow: 0 0 3px 0.01px gray;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const StyledForm = styled.form`
  padding: 20px;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 80px;
`;

export const StyledCancelButton = styled(Button)`
  background-color: white;
  border: 1px solid red;
  color: red;
  margin-right: 10px;
`;

export const StyledSubmitButton = styled(Button)`
  background-color: #5CB85C;
`;


export const StyledTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 10px;
  border-bottom: 1.5px solid lightgray;
`;

export const StyledTitle = styled.span`
  color: black;
  font-size: 18px;
`;

export const StyledBottomWrapper = styled.div`
  padding: 10px;
`;
