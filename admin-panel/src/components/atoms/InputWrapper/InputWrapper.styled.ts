import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  padding: 20px 0 20px 40px;
`;

export const StyledLeftWrapper = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  justify-content: center;
`;

export const StyledRightWrapper = styled.div`
  height: 100%;
  flex: 3;
`;

export const StyledInput = styled.input<{error: boolean}>`
  padding: 5px;
  height: 40px;
  width: 100%;
  font-size: 16px;
  background-color: white;
  border: ${({ error }) => !error ? '2px solid lightgray' : '2px solid red' } ;
  border-radius: 5px;
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  color: gray;
`;

export const StyledErrorMessage = styled.span`
  font-size: 16px;
  color: red;
  line-height: 1.5;
  text-align: left;
`;
