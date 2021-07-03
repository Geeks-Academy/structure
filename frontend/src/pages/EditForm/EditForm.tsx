import React, { useEffect, useState } from 'react';
import { useAsyncEffect } from 'hooks';
import { useForm } from 'react-hook-form';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { SocialRequests, UserRequests } from 'Services';
import CustomSelect from 'components/atoms/FormField/Select';
import CustomInput from 'components/atoms/FormField/Input';
import CustomCheckbox from 'components/atoms/FormField/Checkbox';
import { resolver } from 'helpers/Form/validation';
import { replaceUserInfoIntoSelectOptions, removeCurrentUser } from 'helpers';
import { IUserOptions, IUser, ISocial, ISocialPart } from 'Types/interfaces';
import ImageUploader from 'components/molecules/ImageUploader';
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
import Socials from '../../components/atoms/FormField/Socials';

const { getAllUsers, updateUser, getUser, deactivate } = UserRequests;

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

const { getAllSocials } = SocialRequests;

const mapActualSocialsToAll = (allSocials: ISocialPart[], currentUser: IUser) => {
  const socialArr: ISocial[] = [];
  if (allSocials) {
    allSocials.forEach((social, idx) => {
      socialArr.push({ social, link: '' });
      if (currentUser && currentUser.socials) {
        currentUser.socials.forEach((userSocial) => {
          if (userSocial.social.name === social.name) {
            socialArr[idx].link = userSocial.link;
          }
        });
      }
    });
  }
  return socialArr;
};

const EditForm = (): JSX.Element => {
  const history = useHistory();
  const { params } = useRouteMatch<{ id: string }>();
  const [users, setUsers] = useState<IUserOptions[]>([]);
  const [currentUser, setCurrentUser] = useState<IUser>(defaultValues);
  const [allSocials, setAllSocials] = useState<ISocialPart[]>([]);
  const [mappedSocials, setMappedSocials] = useState<ISocial[]>([]);

  const {
    handleSubmit,
    control,
    reset,
    register,
    setValue,
    setError,
    getValues,
    formState: { errors },
  } = useForm<IUser>({ defaultValues, resolver });

  const initValues = async (): Promise<IUser> => {
    const currentUser = await getUser(params.id);
    if (!currentUser.data.boss) currentUser.data.boss = '';
    return currentUser.data;
  };

  const fetchAllSocials = async (): Promise<ISocialPart[]> => {
    const socials = await getAllSocials();
    return socials.data;
  };

  useAsyncEffect(async () => {
    const allSocials = await fetchAllSocials();
    setAllSocials(allSocials);
    console.log('allsocials', allSocials);
    const initialValues = await initValues();
    initialValues.socials = mapActualSocialsToAll(allSocials, initialValues);
    console.log(currentUser);
    setCurrentUser(initialValues);
    reset(initialValues);
    const users = await getAllUsers();
    const mappedUsersToOptions = replaceUserInfoIntoSelectOptions(users);
    const usersWithoutCurrentUser = removeCurrentUser(initialValues, mappedUsersToOptions);

    setUsers(usersWithoutCurrentUser);
  });

  const onCancel = () => history.replace('/admin');
  const deactivateUser = async () => {
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

  const isActive = currentUser?.active;

  return (
    <StyledContainer>
      <StyledTopWrapper>
        <StyledTitle>Edit Panel</StyledTitle>
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
          <Socials
            label="Socials"
            name="socials"
            control={control}
            register={register}
            getValues={getValues}
            currentUser={currentUser}
          />
          <ImageUploader name="image" setValue={setValue} control={control} />
          <CustomCheckbox label="Manager" name="manager" control={control} error={errors.manager} />
          <CustomCheckbox
            label="Open to work"
            name="openToWork"
            control={control}
            error={errors.openToWork}
          />
          <StyledButtonWrapper
            style={{
              justifyContent: isActive ? 'space-between' : 'flex-end',
            }}
          >
            {isActive && (
              <StyledOutlineButton onClick={deactivateUser} type="button">
                Deactivate
              </StyledOutlineButton>
            )}
            <div>
              <StyledOutlineButton onClick={onCancel} type="button">
                Cancel
              </StyledOutlineButton>
              <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
            </div>
          </StyledButtonWrapper>
        </StyledForm>
      </StyledBottomWrapper>
    </StyledContainer>
  );
};

export default EditForm;
