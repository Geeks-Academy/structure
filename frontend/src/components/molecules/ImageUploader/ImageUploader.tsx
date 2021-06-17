/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useState } from 'react';
import ErrorMessage from 'components/atoms/ErrorMessage';
import { UserRequests } from 'Services';
import IconButton from '@material-ui/core/IconButton';
import ImageRoundedIcon from '@material-ui/icons/ImageRounded';
import { useController } from 'react-hook-form';
import { userPlaceholder } from 'helpers';
import { IImageUploader, IUploadResponse } from './ImageUploader.model';
import {
  StyledButtonLabel,
  StyledContainer,
  StyledImage,
  StyledImageWrapper,
  StyledInput,
  StyledLabel,
} from './ImageUploader.styled';

const ImageUploader = ({ name, setValue, control }: IImageUploader): JSX.Element => {
  const { postImage } = UserRequests;
  const [message, setMessage] = useState<string>('');

  const {
    field: { value },
  } = useController({
    name,
    control,
  });

  const convertFileIntoBase64 = (file: File): any => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      convertFileIntoBase64(file).then((res) => {
        postImage({ image: res }).then((res) => {
          const { url, message }: IUploadResponse = res.data.data;
          const convertedUrl = url || userPlaceholder;
          setMessage(message);
          setValue(name, convertedUrl);
        });
      });
    }
  };

  return (
    <StyledContainer>
      <StyledInput id={name} name={name} type="file" accept="image/*" onChange={handleImage} />
      <StyledLabel> Image </StyledLabel>
      <StyledImageWrapper>
        <StyledButtonLabel htmlFor={name}>
          <IconButton color="primary" component="span">
            <ImageRoundedIcon fontSize="large" />
          </IconButton>
        </StyledButtonLabel>
        <StyledImage src={value} />
      </StyledImageWrapper>
      {message && <ErrorMessage> {message} </ErrorMessage>}
    </StyledContainer>
  );
};

export default ImageUploader;
