import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
`;

export const StyledLeftWrapper = styled.div`
  display: flex;
  height: 100%;
  min-width: 100px;
  justify-content: flex-end;
`;

export const StyledRightWrapper = styled.div`
  width: 100%;
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
  margin-right: 20px;
`;

export const StyledErrorMessage = styled.span`
  font-size: 16px;
  color: red;
  line-height: 1.5;
  text-align: left;
`;
