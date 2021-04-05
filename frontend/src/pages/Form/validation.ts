import * as yup from "yup";

export const validation = () =>
  yup.object({
    name: yup.string(),
    title: yup.string(),
    image: yup.string(),
  });
