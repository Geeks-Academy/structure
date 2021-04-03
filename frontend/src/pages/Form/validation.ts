import * as yup from "yup";

export const validation = () =>
  yup.object({
    name: yup.string().required("Required"),
    title: yup.string().required("Required"),
    image: yup.string().required("Required"),
  });
