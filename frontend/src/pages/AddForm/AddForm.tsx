/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useState } from 'react';
import { useAsyncEffect } from 'hooks';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserRequests } from 'Services';
import CustomSelect from 'components/atoms/FormField/Select';
import CustomInput from 'components/atoms/FormField/Input';
import CustomCheckbox from 'components/atoms/FormField/Checkbox';
import { resolver } from 'helpers/Form/validation';
import { replaceUserInfoIntoSelectOptions, userPlaceholder } from 'helpers';
import ImageUploader from 'components/molecules/ImageUploader';
import { IUser, IUserOptions } from 'Types/interfaces';
import {
  StyledBottomWrapper,
  StyledContainer,
  StyledTitle,
  StyledTopWrapper,
  StyledForm,
  StyledButtonWrapper,
  StyledSubmitButton,
  StyledOutlineButton,
} from './AddForm.styled';

const { getAllUsers, createUser } = UserRequests;

const defaultValues = {
  name: '',
  boss: '',
  email: '',
  image: userPlaceholder,
  title: '',
  manager: false,
  openToWork: false,
};

const AddForm = (): JSX.Element => {
  const history = useHistory();
  const [users, setUsers] = useState<IUserOptions[]>([]);

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<IUser>({ resolver, defaultValues });

  useAsyncEffect(async () => {
    const users = await getAllUsers();
    const data = replaceUserInfoIntoSelectOptions(users);
    setUsers(data);
  });

  const onCancel = () => history.replace('/admin');
  const onSubmit = async (values: IUser) => {
    const result = await createUser(values);
    if (result.error) {
      setError(result.field, { message: result.reason });
      return;
    }
    onCancel();
  };

  return (
    <StyledContainer>
      <StyledTopWrapper>
        <StyledTitle>Add Panel</StyledTitle>
      </StyledTopWrapper>
      <StyledBottomWrapper>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <CustomInput label="Name" name="name" control={control} error={errors.name} />
          <CustomInput label="Email" name="email" control={control} error={errors.email} />
          <CustomInput label="Title" name="title" control={control} error={errors.title} />
          <CustomSelect
            label="Boss"
            name="boss"
            control={control}
            options={users}
            error={errors.boss}
          />
          <ImageUploader name="image" setValue={setValue} control={control} />
          <CustomCheckbox label="Manager" name="manager" control={control} error={errors.manager} />
          <CustomCheckbox
            label="Open to work"
            name="openToWork"
            control={control}
            error={errors.openToWork}
          />
          <StyledButtonWrapper>
            <StyledOutlineButton onClick={onCancel} type="button">
              Cancel
            </StyledOutlineButton>
            <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
          </StyledButtonWrapper>
        </StyledForm>
      </StyledBottomWrapper>
    </StyledContainer>
  );
};

export default AddForm;
