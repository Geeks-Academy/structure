import React from "react";
import { IListItem } from "./ListItem.model";
import {
  StyledImageWrapper,
  StyledListItem,
  StyledUserIcon,
  StyledImage,
  StyledName,
} from "./ListItem.styled";

import { useHistory } from "react-router";

const ListItem = ({ user }: IListItem): JSX.Element => {
  const history = useHistory();
  const { id, name, image } = user;
  // const [edition, setEdition] = useState(false);
  // const [buttonVisibility, setButtonVisibility] = useState(false);
  // const [isActive, setActive] = useState(false);
  // const [modalDescription, setModalDescription] = useState("");
  // const [modalTitle, setModalTitle] = useState<TButton>("Delete");

  // const handleButton = (title: TButton, description: string) => {
  //   setActive(true);
  //   setModalTitle(title);
  //   setModalDescription(description);
  // };

  // const handleCancel = () => {
  //   setActive(false);
  // };

  // const handleConfirm = () => {};

  const editUser = (id: string) => {
    history.push(`/admin/edit/${id}`);
  };

  return (
    <StyledListItem onClick={() => editUser(id)} key={id}>
      {image ? (
        <StyledImageWrapper>
          <StyledImage src={image} />
        </StyledImageWrapper>
      ) : (
        <StyledImageWrapper>
          <StyledUserIcon />
        </StyledImageWrapper>
      )}
      <StyledName> {name} </StyledName>
      {/* <StyledPropertiesWrapper> */}
      {/* <StyledRow>
          <StyledCounter>1</StyledCounter>
          <StyledStrong>ID: </StyledStrong>
          {id}
        </StyledRow> */}

      {/* <StyledRow>
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
        </StyledRow> */}
      {/* </StyledPropertiesWrapper> */}
      {/* <StyleButtonWrapper>
        {buttonVisibility && (
          <StyledEditButton onClick={() => setEdition(!edition)}>
            {" "}
            edit{" "}
          </StyledEditButton>
        )}
        {buttonVisibility && (
          <StyledDeleteButton
            onClick={() => handleButton("Delete", "Wanna delete user?")}
          >
            {" "}
            delete{" "}
          </StyledDeleteButton>
        )}
        {buttonVisibility && (
          <StyledUpdateButton
            onClick={() => handleButton("Update", "Wanna update user?")}
          >
            {" "}
            update{" "}
          </StyledUpdateButton>
        )}
      </StyleButtonWrapper>
      <ModalWindow
        title={modalTitle}
        description={modalDescription}
        handleCancel={() => handleCancel()}
        handleConfirm={() => handleConfirm()}
        isActive={isActive}
      /> */}
    </StyledListItem>
  );
};

export default ListItem;
