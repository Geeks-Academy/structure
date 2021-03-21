import styled from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  grid-gap: 10px;
  width: 100%;
  height: 100%;
  border-spacing: 0;
  background-color: #F4F6F6;
  padding: 10px;
`;

export const StyledListItem = styled.li`
  background-color: white;
  padding: 10px;
`;

export const StyledRow = styled.p`
display: flex;
  font-size: 12px;
  color: gray;
  line-height: 1.35;
`;

export const StyledStrong = styled.strong`
  font-weight: bold;
  color: black;
  margin-right: 5px;
`;

export const StyledCounter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  width: 40px;
`;
