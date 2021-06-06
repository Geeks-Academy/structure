import { useState } from 'react';
import { useAsyncEffect } from 'hooks';
import { useForm } from 'react-hook-form';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { UserRequests } from 'Services';
import CustomSelect from 'components/atoms/FormField/Select';
import CustomInput from 'components/atoms/FormField/Input';
import CustomCheckbox from 'components/atoms/FormField/Checkbox';
import { resolver } from 'helpers/Form/validation';
import { replaceUserInfoIntoSelectOptions, removeCurrentUser } from 'helpers';
import { IUserOptions, IUser } from 'Types/interfaces';
import {
  StyledBottomWrapper,
  StyledContainer,
  StyledTitle,
  StyledTopWrapper,
  StyledForm,
  StyledButtonWrapper,
  StyledSubmitButton,
  StyledCancelButton,
} from './EditForm.styled';
import Socials from '../../components/atoms/FormField/Socials';

const { getAllUsers, updateUser, getUser } = UserRequests;

const defaultValues = {
  name: '',
  boss: '',
  email: '',
  image: '',
  title: '',
  socials: [],
  openToWork: true,
  manager: false,
};

const EditForm = (): JSX.Element => {
  const history = useHistory();
  const { params } = useRouteMatch<{ id: string }>();
  const [users, setUsers] = useState<IUserOptions[]>([]);

  const {
    handleSubmit,
    control,
    reset,
    register,
    setError,
    formState: { errors },
  } = useForm<IUser>({ defaultValues, resolver });

  const initValues = async (): Promise<IUser> => {
    const currentUser = await getUser(params.id);
    if (!currentUser.data.boss) currentUser.data.boss = '';
    return currentUser.data;
  };

  useAsyncEffect(async () => {
    const initialValues = await initValues();
    reset(initialValues);
    const users = await getAllUsers();
    const mappedUsersToOptions = replaceUserInfoIntoSelectOptions(users);
    const usersWithoutCurrentUser = removeCurrentUser(initialValues, mappedUsersToOptions);

    setUsers(usersWithoutCurrentUser);
  });

  const onCancel = () => history.replace('/admin');
  const onSubmit = async (values: IUser) => {
    const result = await updateUser(values);
    if (result.error) {
      setError(result.field, { message: result.reason });
      return;
    }
    onCancel();
  };

  return (
    <StyledContainer>
      <StyledTopWrapper>
        <StyledTitle>Edit Panel</StyledTitle>
      </StyledTopWrapper>
      <StyledBottomWrapper>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <CustomInput label="Name" name="name" control={control} error={errors.name} />
          <CustomInput label="Email" name="email" control={control} error={errors.email} />
          <CustomInput label="Image" name="image" control={control} error={errors.image} />
          <CustomInput label="Title" name="title" control={control} error={errors.title} />
          <CustomSelect
            label="Boss"
            name="boss"
            control={control}
            options={users}
            error={errors.boss}
          />
          <Socials label="Socials" name="socials" control={control} register={register} />
          <CustomCheckbox label="Manager" name="manager" control={control} error={errors.manager} />
          <CustomCheckbox
            label="Open to work"
            name="openToWork"
            control={control}
            error={errors.openToWork}
          />
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

export default EditForm;
