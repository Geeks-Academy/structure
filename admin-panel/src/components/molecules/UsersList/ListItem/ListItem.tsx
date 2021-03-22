import React, { useState } from "react";
import { IListItem } from "./ListItem.model";
import {
  StyledRow,
  StyledListItem,
  StyledStrong,
  StyledCounter,
  StyledEditButton,
  StyledDeleteButton,
  StyleButtonWrapper,
  StyledPropertiesWrapper,
} from "./ListItem.styled";

const ListItem = ({ user }: IListItem): JSX.Element => {
  const {
    id,
    boss,
    name,
    image,
    email,
    title,
    active,
    manager,
    openToWork,
  } = user;
  const [edition, setEdition] = useState(false);

  return (
    <StyledListItem key={id}>
      <StyledPropertiesWrapper>
        <StyledRow>
          <StyledCounter>1</StyledCounter>
          <StyledStrong>ID: </StyledStrong>
          {id}
        </StyledRow>
        <StyledRow>
          <StyledCounter>2</StyledCounter>
          <StyledStrong>Name: </StyledStrong>
          {edition ? <input defaultValue={name}/> : name}
        </StyledRow>
        <StyledRow>
          <StyledCounter>3</StyledCounter>
          <StyledStrong>Email: </StyledStrong>
          {edition ? <input defaultValue={email}/> : email}
        </StyledRow>
        <StyledRow>
          <StyledCounter>4</StyledCounter>
          <StyledStrong>Title: </StyledStrong>
          {edition ? <input defaultValue={title}/> : title}
        </StyledRow>
        <StyledRow>
          <StyledCounter>5</StyledCounter>
          <StyledStrong>Active: </StyledStrong>
          {edition ? <input defaultValue={`${active}`}/> : `${active}`}
        </StyledRow>
        <StyledRow>
          <StyledCounter>6</StyledCounter>
          <StyledStrong>Image: </StyledStrong>
          {edition ? <input defaultValue={image}/> : image}
        </StyledRow>
        <StyledRow>
          <StyledCounter>7</StyledCounter>
          <StyledStrong>Boss: </StyledStrong>
          {edition ? <input defaultValue={`${boss}`}/> : `${boss}`}
        </StyledRow>
        <StyledRow>
          <StyledCounter>8</StyledCounter>
          <StyledStrong>Manager: </StyledStrong>
          {edition ? <input defaultValue={`${manager}`}/> : `${manager}`}
        </StyledRow>
        <StyledRow>
          <StyledCounter>9</StyledCounter>
          <StyledStrong>OpenToWork:</StyledStrong>
          {edition ? <input defaultValue={`${openToWork}`}/> : `${openToWork}`}
        </StyledRow>
      </StyledPropertiesWrapper>
      <StyleButtonWrapper>
        <StyledEditButton onClick={() => setEdition(!edition)}>
          edit
        </StyledEditButton>
        <StyledDeleteButton> delete </StyledDeleteButton>
      </StyleButtonWrapper>
    </StyledListItem>
  );
};

export default ListItem;
