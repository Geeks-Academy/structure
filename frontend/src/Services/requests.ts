import { axiosInstance } from "./api";

export const getAllUsers = async () => {
  return await axiosInstance.get("users");
};

export const getUser = async (id: string) => {
  return await axiosInstance.get(`users/${id}`);
};
