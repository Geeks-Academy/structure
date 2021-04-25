import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledWrapper = styled.div``;
export const StyledLabel = styled.label`
  font-size: 20px;
  color: ${colors.background.darkGray};
`;
export const StyledInput = styled.input`
  font-size: 20px;
  width: 100%;
  height: 40px;
  border: 2px solid ${colors.background.gray};
  padding: 0 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  color: ${colors.background.darkGray};
  ::placeholder {
    color: ${colors.background.darkGray};
  }
`;
export const StyledError = styled.p`
  color: ${colors.background.red};
`;
