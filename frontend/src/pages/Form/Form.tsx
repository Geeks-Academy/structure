import React, { useEffect, useState } from "react";
import InputWrapper from "components/atoms/InputWrapper";
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
import SocialList from "components/molecules/SocialList";
import {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
} from "Services/requests";
import { getUserObject, isObjectEmpty } from "helpers";
import { IUser } from "Types/interfaces";

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
          <InputWrapper
            label="Name"
            type="text"
            name="name"
            touched={touched}
            isRequired={true}
            errorId="err_name"
            value={values.name}
            error={errors.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <InputWrapper
            label="Image"
            type="text"
            name="image"
            touched={touched}
            isRequired={true}
            errorId="err_image"
            value={values.image}
            error={errors.image}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <InputWrapper
            label="Title"
            type="text"
            name="title"
            touched={touched}
            isRequired={true}
            errorId="err_title"
            value={values.title}
            error={errors.title}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <label>
            Manager:
            <input
              type="checkbox"
              name="manager"
              checked={values.manager}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </label>
          <label className="block">
            <span className="text-gray-700 -ml-12">Name</span>
            <input type="email" className="form-input px-4 py-3 rounded-full" />
          </label>

          <label>
            OpenToWork:
            <input
              type="checkbox"
              name="openToWork"
              checked={values.openToWork}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </label>
          <label>
            Active:
            <input
              type="checkbox"
              name="active"
              checked={values.active}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </label>

          <div>
            <label  htmlFor="boss">Boss</label>
            <select id="boss" className="form-select mt-1 block w-full">
              {users.map((user) => {
                return <option value={user.name}>{user.name}</option>;
              })}
            </select>
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
