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
  StyledOutlineButton,
} from './EditForm.styled';

const { getAllUsers, updateUser, getUser, deactivate } = UserRequests;

const defaultValues = {
  name: '',
  boss: '',
  email: '',
  image: '',
  title: '',
  openToWork: true,
  manager: false,
};

const EditForm = (): JSX.Element => {
  const history = useHistory();
  const { params } = useRouteMatch<{ id: string }>();
  const [users, setUsers] = useState<IUserOptions[]>([]);
  const [currentUser, setCurrentUser] = useState<IUser>();

  const {
    handleSubmit,
    control,
    reset,
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
    setCurrentUser(initialValues);
    reset(initialValues);
    const users = await getAllUsers();
    const mappedUsersToOptions = replaceUserInfoIntoSelectOptions(users);
    const usersWithoutCurrentUser = removeCurrentUser(initialValues, mappedUsersToOptions);

    setUsers(usersWithoutCurrentUser);
  });

  const onCancel = () => history.replace('/admin');
  const deactivateTheUser = async () => {
    const result = await deactivate(currentUser?._id as string);
    if (result.status === 200) {
      onCancel();
    }
  };
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
          <CustomCheckbox label="Manager" name="manager" control={control} error={errors.manager} />
          <CustomCheckbox
            label="Open to work"
            name="openToWork"
            control={control}
            error={errors.openToWork}
          />
          <StyledButtonWrapper>
            {currentUser && currentUser.active && (
              <StyledOutlineButton onClick={deactivateTheUser} type="button">
                Deactivate
              </StyledOutlineButton>
            )}
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

export default EditForm;
