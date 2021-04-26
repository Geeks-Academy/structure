/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';

import { useHistory, useRouteMatch } from 'react-router-dom';
import { getUserObject, isObjectEmpty } from 'helpers';
import { ISocialPart, IUser } from 'Types/interfaces';
import Input from 'components/atoms/Input';
import Checkbox from 'components/atoms/Checkbox';
import SocialList from 'components/molecules/SocialList';

import { SocialRequests, UserRequests } from 'Services';
import {
  StyledBottomWrapper,
  StyledButtonWrapper,
  StyledCancelButton,
  StyledContainer,
  StyledForm,
  StyledLabel,
  StyledOption,
  StyledSelect,
  StyledSelectWrapper,
  StyledSubmitButton,
  StyledTitle,
  StyledTopWrapper,
} from './Form.styled';
import { validation } from './validation';
import { IForm } from './Form.model';

import { FORM_TITLE } from './helpers';

const Form = ({ edit }: IForm): JSX.Element => {
  const history = useHistory();
  const { params } = useRouteMatch<{ id: string }>();
  const [initialValues, setInitialValues] = useState(getUserObject());
  const [users, setUsers] = useState<IUser[]>([]);
  const [socials, setSocials] = useState<ISocialPart[]>([]);
  const { getAllSocials } = SocialRequests;
  const { createUser, getAllUsers, getUser, updateUser } = UserRequests;

  const onCancel = () => history.replace('/admin');
  const onSubmit = (data: IUser, edit: boolean) => {
    const { name, boss, image, title, active, manager, openToWork } = data;

    if (edit) {
      updateUser(data);
    } else {
      createUser({
        name,
        boss,
        image,
        title,
        active,
        socials: data.socials,
        manager,
        openToWork,
      });
    }

    setTimeout(() => {
      onCancel();
    }, 100);
  };

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

  useEffect(() => {
    if (!isObjectEmpty(params)) {
      getUser(
        params.id
      ).then(({ data: { _id, name, image, title, openToWork, manager, active, boss, socials } }) =>
        setInitialValues(
          getUserObject(_id, name, image, title, openToWork, manager, active, boss, socials)
        )
      );
    }
  }, [params, getUser]);

  return (
    <StyledContainer>
      <StyledTopWrapper>
        <StyledTitle> {edit ? FORM_TITLE.EDIT_PANEL : FORM_TITLE.ADD_PANEL} </StyledTitle>
      </StyledTopWrapper>
      <StyledBottomWrapper>
        <StyledForm onSubmit={handleSubmit} noValidate>
          <Input
            id="name"
            label="Name"
            name="name"
            required
            value={values.name}
            error={errors.name}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="type name"
          />
          <Input
            id="image"
            label="Image"
            name="image"
            value={values.image}
            error={errors.image}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="type image"
          />
          <Input
            id="title"
            label="Title"
            name="title"
            value={values.title}
            error={errors.title}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="type title"
          />

          <StyledSelectWrapper>
            <StyledLabel htmlFor="boss">Boss</StyledLabel>
            <StyledSelect
              id="boss"
              value={`${values.boss}`}
              onChange={handleChange}
              onBlur={handleBlur}
              name="boss"
            >
              <StyledOption value="">{'-- none --'}</StyledOption>
              {users.map((user) => {
                return (
                  // eslint-disable-next-line no-underscore-dangle
                  <StyledOption className="text-2xl" key={user._id} value={user._id}>
                    {user.name}
                  </StyledOption>
                );
              })}
            </StyledSelect>
          </StyledSelectWrapper>

          <SocialList userSocials={values.socials || []} allSocials={socials || []} />

          <div className="flex flex-col mb-10">
            <Checkbox
              name="openToWork"
              label="Open to work"
              onBlur={handleBlur}
              onChange={handleChange}
              isChecked={!!values.openToWork}
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
