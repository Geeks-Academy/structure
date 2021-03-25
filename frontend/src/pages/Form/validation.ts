import * as yup from "yup";

export const validation = () =>
  yup.object({
    email: yup.string().required("Required").email("Invalid e-mail"),
    name: yup.string().required("Required"),
    title: yup.string().required("Required"),
    image: yup.string().required("Required"),
  });
