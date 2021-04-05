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
import { IUser } from "Types/interfaces";
import Input from "components/atoms/Input";
import Checkbox from "components/atoms/Checkbox";
import SocialList from "components/molecules/SocialList";

import {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
} from "Services/requests";

const Form = ({ edit }: IForm): JSX.Element => {
  const history = useHistory();
  const { params } = useRouteMatch<{ id: string }>();
  const [initialValues, setInitialValues] = useState(getUserObject());
  const [users, setUsers] = useState<IUser[]>([]);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    validationSchema: validation(),
    enableReinitialize: true,
    validateOnChange: true,
    initialValues,
    onSubmit: (values) => {
      handleOnSubmit(values, !!edit);
    },
  });

  useEffect(() => {
    getAllUsers().then(({ data }) => {
      setUsers(data);
    });
  }, [setUsers]);

  const onCancel = () => history.replace("/admin");
  const handleOnSubmit = (data: IUser, edit: boolean) => {
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
    
    edit && updateUser(data);
    !edit &&
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
  }, [params]);

  return (
    <StyledContainer>
      <StyledTopWrapper>
        <StyledTitle> {edit ? "EditPanel" : "AddPanel"} </StyledTitle>
      </StyledTopWrapper>
      <StyledBottomWrapper>
        <StyledForm onSubmit={handleSubmit} noValidate>
          <Input
            inputId="name"
            label="Name"
            type="text"
            name="name"
            touched={touched}
            required={true}
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
            touched={touched}
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
            touched={touched}
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
              {users.map((user) => {
                return (
                  <option className="text-2xl" key={user._id} value={user._id}>
                    {user.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex flex-col">
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

          <SocialList socials={values.socials || []} />
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
