import React, { useEffect, useState } from "react";
import InputWrapper from "components/atoms/InputWrapper";
import { Formik } from "formik";
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
import { useHistory } from "react-router";
import { IForm } from "./Form.model";
import SocialList from "components/molecules/SocialList";

const Form = ({ edit }: IForm): JSX.Element => {
  const history = useHistory();
  // const [initialValues, setInitialValues] = useState();
  const onSubmit = () => {};
  const onCancel = () => history.replace("/admin");

  return (
    <StyledContainer>
      <StyledTopWrapper>
        <StyledTitle> {edit ? "EditPanel" : "AddPanel"} </StyledTitle>
      </StyledTopWrapper>
      <StyledBottomWrapper>
        <Formik
          validateOnChange={true}
          validationSchema={validation()}
          enableReinitialize
          initialValues={{
            email: "",
            name: "",
            title: "",
            openToWork: false,
            manager: false,
            active: true,
            image: "",
            boss: {
              
            },
            socials: [
              {
                link: "dasdsa",
                social: {
                  active: true,
                  image: "image",
                  name: "Facebook",
                },
              },
            ],
          }}
          onSubmit={() => {
            onSubmit();
          }}
        >
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            touched,
            values,
            errors,
          }) => (
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
                label="E-mail"
                type="email"
                name="email"
                touched={touched}
                isRequired={true}
                errorId="err_email"
                value={values.email}
                error={errors.email}
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
                Manager:{" "}
                <input type="checkbox" defaultChecked={values.manager} />
              </label>
              <label>
              OpenToWork:{" "}
                <input type="checkbox" defaultChecked={values.openToWork} />
              </label>
              <label>
                Active:{" "}
                <input type="checkbox" defaultChecked={values.active} />
              </label>
              <SocialList 
                socials={values.socials}
              />
              <StyledButtonWrapper>
                <StyledCancelButton onClick={onCancel} type="button">
                  Cancel
                </StyledCancelButton>
                <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
              </StyledButtonWrapper>
            </StyledForm>
          )}
        </Formik>
      </StyledBottomWrapper>
    </StyledContainer>
  );
};

export default Form;
