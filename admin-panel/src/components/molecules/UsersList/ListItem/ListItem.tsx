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
  StyledUpdateButton,
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
  const [buttonVisibility, setButtonVisibility] = useState(false);

  return (
    <StyledListItem
      onMouseEnter={() => setButtonVisibility(true)}
      onMouseLeave={() => setButtonVisibility(false)}
      key={id}
    >
      <StyledPropertiesWrapper>
        <StyledRow>
          <StyledCounter>1</StyledCounter>
          <StyledStrong>ID: </StyledStrong>
          {id}
        </StyledRow>

        <StyledRow>
          <StyledCounter>2</StyledCounter>
          <StyledStrong>Name: </StyledStrong>
          {edition ? <input defaultValue={name} /> : name}
        </StyledRow>

        <StyledRow>
          <StyledCounter>3</StyledCounter>
          <StyledStrong>Email: </StyledStrong>
          {edition ? <input defaultValue={email} /> : email}
        </StyledRow>

        <StyledRow>
          <StyledCounter>5</StyledCounter>
          <StyledStrong>Image: </StyledStrong>
          {edition ? <input defaultValue={image} /> : image}
        </StyledRow>

        <StyledRow>
          <StyledCounter>4</StyledCounter>
          <StyledStrong>Title: </StyledStrong>
          {edition ? <input defaultValue={title} /> : title}
        </StyledRow>
   
        <StyledRow>
          <StyledCounter>9</StyledCounter>
          <StyledStrong>OpenToWork:</StyledStrong>
          {edition ? (
            <input type="checkbox" defaultChecked={!!openToWork} />
          ) : (
            `${openToWork}`
          )}
        </StyledRow>

        <StyledRow>
          <StyledCounter>8</StyledCounter>
          <StyledStrong>Manager: </StyledStrong>
          {edition ? (
            <input type="checkbox" defaultChecked={!!manager} />
          ) : (
            `${manager}`
          )}
        </StyledRow>

        <StyledRow>
          <StyledCounter>6</StyledCounter>
          <StyledStrong>Active: </StyledStrong>
          {edition ? (
            <input type="checkbox" defaultChecked={!!active} />
          ) : (
            `${active}`
          )}
        </StyledRow>

        <StyledRow>
          <StyledCounter>7</StyledCounter>
          <StyledStrong>Boss: </StyledStrong>
          {edition ? (
            <input type="checkbox" defaultChecked={!!boss} />
          ) : (
            `${boss}`
          )}
        </StyledRow>
    
      </StyledPropertiesWrapper>
      <StyleButtonWrapper>
        {buttonVisibility && (
          <StyledEditButton onClick={() => setEdition(!edition)}>
            {" "}
            edit{" "}
          </StyledEditButton>
        )}
        {buttonVisibility && <StyledDeleteButton> delete </StyledDeleteButton>}
        {buttonVisibility && <StyledUpdateButton> update </StyledUpdateButton>}
      </StyleButtonWrapper>
    </StyledListItem>
  );
};

export default ListItem;
