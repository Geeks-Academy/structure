import React, { ChangeEvent, useState } from 'react';
import { useAsyncEffect } from 'hooks';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserRequests } from 'Services';
import CustomSelect from 'components/atoms/FormField/Select';
import CustomInput from 'components/atoms/FormField/Input';
import CustomCheckbox from 'components/atoms/FormField/Checkbox';
import { resolver } from 'helpers/Form/validation';
import { replaceUserInfoIntoSelectOptions } from 'helpers';
import { IUserOptions } from 'Types/interfaces';
import {
  StyledBottomWrapper,
  StyledContainer,
  StyledTitle,
  StyledTopWrapper,
  StyledForm,
  StyledButtonWrapper,
  StyledSubmitButton,
  StyledCancelButton,
} from './AddForm.styled';

const { getAllUsers, createUser, postImage } = UserRequests;

const defaultValues = {
  name: '',
  boss: '',
  email: '',
  image: '',
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
    register,
    formState: { errors },
  } = useForm({
    resolver,
    defaultValues,
  });

  useAsyncEffect(async () => {
    const users: any = await getAllUsers();
    const data = replaceUserInfoIntoSelectOptions(users);
    setUsers(data);
  });

  const onCancel = () => history.replace('/admin');
  const onSubmit = async (values: any) => {
    await createUser(values);
    onCancel();
  };

  const convertFileIntoBase64 = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(JSON.stringify(reader.result));
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      convertFileIntoBase64(file).then((res) => {
        postImage({ image: res });
      });
    }
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
          <CustomCheckbox label="Manager" name="manager" control={control} error={errors.manager} />
          <CustomCheckbox
            label="Open to work"
            name="openToWork"
            control={control}
            error={errors.openToWork}
          />
          <input type="file" {...register('image')} onChange={handleImage} accept="image/*" />
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

export default AddForm;
