import styled from 'styled-components';
import { colors } from 'styles/colors';

export const StyledList = styled.ul`
  display: grid;
  grid-gap: 10px;
  width: 100%;
  height: fit-content;
  border-spacing: 0;
  background-color: ${colors.background.gray};
  padding: 10px;
`;
