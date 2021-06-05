/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useState } from 'react';
import ErrorMessage from 'components/atoms/ErrorMessage';
import { UserRequests } from 'Services';
import IconButton from '@material-ui/core/IconButton';
import ImageRoundedIcon from '@material-ui/icons/ImageRounded';
import { StyledContainer, StyledImage, StyledInput, StyledLabel } from './ImageUploader.styled';

interface IProps {
  name: string;
  setValue?: (name: string) => void;
}

interface IUploadImageResponse {
  path?: string;
  message?: string;
}

const ImageUploader = ({ name, setValue }: IProps): JSX.Element => {
  const [image, setImage] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const { postImage } = UserRequests;

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
          const { path, message }: IUploadImageResponse = res.data.data;
          if (path) {
            setMessage('');
            setImage(path);
            setValue(name, path);
          } else {
            setMessage(message);
            setImage('');
            setValue(name, '');
          }
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
      {image && <StyledImage src={image} />}
      {message && <ErrorMessage> {message} </ErrorMessage>}
    </StyledContainer>
  );
};

export default ImageUploader;
