import { axiosInstance } from "Services";

export const getAllSocials = async () => {
  return await axiosInstance.get("socials");
};
