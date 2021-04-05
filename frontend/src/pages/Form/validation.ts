import * as yup from "yup";

export const validation = () =>
  yup.object({
    name: yup.string().required('Name is required'),
    title: yup.string(),
    image: yup.string(), 
    boss: yup.string()
  });
