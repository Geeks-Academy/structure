import Input from "components/atoms/Input";
import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const StyledInput = styled(Input)`
  margin: 0;
  width: 100%;
`;
