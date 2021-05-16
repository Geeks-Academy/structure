import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  title: yup.string().required('Title is required'),
  email: yup.string().email().required('Email is required'),
});
export const resolver = yupResolver(schema);
