import * as yup from "yup";

export const validation = () =>
  yup.object({
    name: yup.string().required('Name is required'),
    title: yup.string().required('Name is required'),
    image: yup.string(), 
    boss: yup.string().nullable(),
    openToWork: yup.boolean().default(true),
    manager: yup.boolean().default(true),
    active: yup.boolean().default(false),
  });