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
import { getUser } from "Services/requests";
import { getUserObject, isObjectEmpty } from "helpers";
import { IUser } from "Types/interfaces";

const Form = ({ edit }: IForm): JSX.Element => {
  const history = useHistory();
  const { params } = useRouteMatch<{ id: string }>();
  const [initialValues, setInitialValues] = useState(getUserObject());

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: validation(),
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit: (values) => {
      handleOnSubmit(values);
    },
  });

  const onCancel = () => history.replace("/admin");
  const handleOnSubmit = (data: IUser) => {
    
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

  useEffect(() => {
    // console.log("Initial", initialValues);
  }, [initialValues]);

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
          <pre>{JSON.stringify(values, null, 2)}</pre>

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
