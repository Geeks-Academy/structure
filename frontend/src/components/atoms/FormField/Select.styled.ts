import styled from 'styled-components';
import { colors } from 'styles/colors';
import { Select, MenuItem } from '@material-ui/core';

export const StyledSelect = styled(Select)`
  width: 100%;
  border: 2px solid ${colors.background.gray};
  border-radius: 5px;
  height: 40px;
  color: ${colors.background.darkGray};
  font-size: 20px;
`;
export const StyledOption = styled(MenuItem)`
  font-size: 20px;
  color: ${colors.background.darkGray};
`;

export const StyledSelectWrapper = styled.div`
  margin-bottom: 10px;
`;
export const StyledLabel = styled.label`
  font-size: 20px;
  color: ${colors.background.darkGray};
`;
