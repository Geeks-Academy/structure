/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useState } from 'react';
import ErrorMessage from 'components/atoms/ErrorMessage';
import { UserRequests } from 'Services';
import IconButton from '@material-ui/core/IconButton';
import ImageRoundedIcon from '@material-ui/icons/ImageRounded';
import { useController } from 'react-hook-form';
import { IImageUploader, IUploadResponse } from './ImageUploader.model';
import { StyledContainer, StyledImage, StyledInput, StyledLabel } from './ImageUploader.styled';

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
          setMessage(message);
          setValue(name, url);
        });
      });
    }
  };

  return (
    <StyledContainer>
      <StyledInput id={name} name={name} type="file" accept="image/*" onChange={handleImage} />
      <StyledLabel htmlFor={name}>
        Image:
        <IconButton color="primary" component="span">
          <ImageRoundedIcon fontSize="large" />
        </IconButton>
      </StyledLabel>
      {value && <StyledImage src={value} />}
      {message && !value && <ErrorMessage> {message} </ErrorMessage>}
    </StyledContainer>
  );
};

export default ImageUploader;
