import React, { useState } from "react";
import { IUserList } from "./UserList.model";
import { StyledList, StyledRow, StyledListItem, StyledStrong, StyledCounter } from "./UserList.styled";

const UserList = ({ users }: IUserList): JSX.Element => {
  return (
    <StyledList>
      {users.map(
        ({
          id,
          boss,
          name,
          email,
          title,
          image,
          active,
          manager,
          openToWork,
        }) => {
          return (
            <StyledListItem key={id}>
              <StyledRow> <StyledCounter>1</StyledCounter><StyledStrong>ID: </StyledStrong> {id} </StyledRow>
              <StyledRow> <StyledCounter>2</StyledCounter><StyledStrong>Name: </StyledStrong> {name} </StyledRow>
              <StyledRow> <StyledCounter>3</StyledCounter><StyledStrong>Email: </StyledStrong> {email} </StyledRow>
              <StyledRow> <StyledCounter>4</StyledCounter><StyledStrong>Title: </StyledStrong> {title} </StyledRow>
              <StyledRow> <StyledCounter>5</StyledCounter><StyledStrong>Active: </StyledStrong> {`${active}`} </StyledRow>
              <StyledRow> <StyledCounter>6</StyledCounter><StyledStrong>Image: </StyledStrong> {image} </StyledRow>
              <StyledRow> <StyledCounter>7</StyledCounter><StyledStrong>Boss: </StyledStrong> {`${boss}`} </StyledRow>
              <StyledRow> <StyledCounter>8</StyledCounter><StyledStrong>Manager: </StyledStrong> {`${manager}`} </StyledRow>
              <StyledRow> <StyledCounter>9</StyledCounter><StyledStrong>OpenToWork: </StyledStrong> {`${openToWork}`} </StyledRow>
            </StyledListItem>
          );
        }
      )}
    </StyledList>
  );
};

export default UserList;
