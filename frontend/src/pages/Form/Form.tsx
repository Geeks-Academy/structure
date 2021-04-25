import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { validation } from "./validation";
import {
  StyledBottomWrapper,
  StyledButtonWrapper,
  StyledSubmitButton,
  StyledCancelButton,
  StyledTopWrapper,
  StyledContainer,
  StyledTitle,
  StyledForm,
} from "./Form.styled";
import { IForm } from "./Form.model";
import { useRouteMatch, useHistory } from "react-router-dom";
import { getUserObject, isObjectEmpty } from "helpers";
import { ISocial, IUser } from "Types/interfaces";
import Input from "components/atoms/Input";
import Checkbox from "components/atoms/Checkbox";
import SocialList from "components/molecules/SocialList";

import { SocialRequests, UserRequests } from "Services";

import { FORM_TITLE } from "./helpers";

const Form = ({ edit }: IForm): JSX.Element => {
  const history = useHistory();
  const { params } = useRouteMatch<{ id: string }>();
  const [initialValues, setInitialValues] = useState(getUserObject());
  const [users, setUsers] = useState<IUser[]>([]);
  const [socials, setSocials] = useState<ISocial[]>([]);
  const { getAllSocials } = SocialRequests;
  const { createUser, getAllUsers, getUser, updateUser } = UserRequests;

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    validationSchema: validation(),
    enableReinitialize: true,
    validateOnChange: true,
    initialValues,
    onSubmit: (values) => {
      onSubmit(values, !!edit);
    },
  });

  useEffect(() => {
    getAllUsers().then(({ data }) => {
      setUsers(data);
    });
  }, [setUsers, getAllUsers]);

  useEffect(() => {
    getAllSocials().then(({ data }) => {
      setSocials(data);
    });
  }, [setSocials, getAllSocials]);

  const onCancel = () => history.replace("/admin");
  const onSubmit = (data: IUser, edit: boolean) => {
    const {
      name,
      boss,
      image,
      title,
      active,
      socials,
      manager,
      openToWork,
    } = data;

    if (edit) {
      updateUser(data);
    } else {
      createUser({
        name,
        boss,
        image,
        title,
        active,
        socials,
        manager,
        openToWork,
      });
    }

    setTimeout(() => {
      onCancel();
    }, 100);
  };

  useEffect(() => {
    if (!isObjectEmpty(params)) {
      getUser(
        params.id
      ).then(
        ({
          data: {
            _id,
            name,
            image,
            title,
            openToWork,
            manager,
            active,
            boss,
            socials,
          },
        }) =>
          setInitialValues(
            getUserObject(
              _id,
              name,
              image,
              title,
              openToWork,
              manager,
              active,
              boss,
              socials
            )
          )
      );
    }
  }, [params, getUser]);

  return (
    <StyledContainer>
      <StyledTopWrapper>
        <StyledTitle>
          {" "}
          {edit ? FORM_TITLE.EDIT_PANEL : FORM_TITLE.ADD_PANEL}{" "}
        </StyledTitle>
      </StyledTopWrapper>
      <StyledBottomWrapper>
        <StyledForm onSubmit={handleSubmit} noValidate>
          <Input
            inputId="name"
            label="Name"
            type="text"
            name="name"
            required
            errorId="err_name"
            value={values.name}
            error={errors.name}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="type name"
          />
          <Input
            inputId="image"
            label="Image"
            type="text"
            name="image"
            errorId="err_image"
            value={values.image}
            error={errors.image}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="type image"
          />
          <Input
            inputId="title"
            label="Title"
            type="text"
            name="title"
            errorId="err_title"
            value={values.title}
            error={errors.title}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="type title"
          />

          <div>
            <label
              className="block text-gray-500 font-bold mb-2 text-xl"
              htmlFor="boss"
            >
              Boss
            </label>
            <select
              id="boss"
              className="form-select mt-1 block w-full h-16 rounded-lg border-2 border-gray-200 text-2xl mb-10"
              value={`${values.boss}`}
              onChange={handleChange}
              onBlur={handleBlur}
              name="boss"
            >
              <option value="">{"-- none --"}</option>
              {users.map((user) => {
                return (
                  <option className="text-2xl" key={user._id} value={user._id}>
                    {user.name}
                  </option>
                );
              })}
            </select>
          </div>

          <SocialList socials={socials} />

          <div className="flex flex-col mb-10">
            <Checkbox
              name="openToWork"
              label="Open to work"
              onBlur={handleBlur}
              onChange={handleChange}
              isChecked={!!values.openToWork}
            />
            <Checkbox
              name="active"
              label="Active"
              onBlur={handleBlur}
              onChange={handleChange}
              isChecked={!!values.active}
            />
            <Checkbox
              name="manager"
              label="Manager"
              onBlur={handleBlur}
              onChange={handleChange}
              isChecked={!!values.manager}
            />
          </div>
          <StyledButtonWrapper>
            <StyledCancelButton onClick={onCancel} type="button">
              Cancel
            </StyledCancelButton>
            <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
          </StyledButtonWrapper>
        </StyledForm>
      </StyledBottomWrapper>
    </StyledContainer>
  );
};

export default Form;
