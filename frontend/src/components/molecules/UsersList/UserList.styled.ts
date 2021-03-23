import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledList = styled.ul`
  display: grid;
  grid-gap: 10px;
  width: 100%;
  height: 100%;
  border-spacing: 0;
  background-color: ${colors.background.gray};
  padding: 10px;
`;
