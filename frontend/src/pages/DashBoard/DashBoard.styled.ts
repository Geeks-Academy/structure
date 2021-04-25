import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const StyledTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  width: 100%;
  padding: 10px;
`;

export const StyledRightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;
`;

export const StyledInput = styled(Input)`
  width: 400px;
  margin: 0 10px 0 0;
`;

export const StyledBottomWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${colors.background.gray};
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
  background-color: ${colors.background.green};
  border-radius: 4px;
`;
