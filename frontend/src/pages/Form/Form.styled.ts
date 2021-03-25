import styled from "styled-components";
import Button from "components/atoms/Button";
import { colors } from "styles/colors";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
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

export const StyledBottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledForm = styled.form`
  padding: 100px;
  width: 100%;
  margin: 0;
  @media (min-width: 768px) {
    width: 600px;
  }
  @media (min-width: 1440px) {
    width: 1200px;
  }
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
  background-color: ${colors.background.green};
`;

export const StyledTitle = styled.span`
  color: black;
  font-size: 18px;
`;
