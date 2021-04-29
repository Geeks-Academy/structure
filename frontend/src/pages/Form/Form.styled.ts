import styled from 'styled-components';
import Button from 'components/atoms/Button';
import { colors } from 'styles/colors';

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
  width: 1200px;
  margin: 0;
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

export const StyledLabel = styled.label`
  font-size: 20px;
  color: ${colors.background.darkGray};
`;
export const StyledSelect = styled.select`
  width: 100%;
  border: 2px solid ${colors.background.gray};
  border-radius: 5px;
  height: 40px;
  color: ${colors.background.darkGray};
  font-size: 20px;
`;
export const StyledOption = styled.option`
  font-size: 20px;
  color: ${colors.background.darkGray};
`;

export const StyledSelectWrapper = styled.div`
  margin-bottom: 10px;
`;
