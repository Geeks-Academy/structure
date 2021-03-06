import styled from 'styled-components';
import { colors } from 'styles/colors';
import { Checkbox } from '@material-ui/core';

export const StyledInput = styled(Checkbox)`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;
export const StyledWrapper = styled.div`
  display: flex;
  margin: 5px 0;
`;
export const StyledLabel = styled.label`
  color: ${colors.background.darkGray};
  font-size: 15px;
  margin-right: 10px;
`;
