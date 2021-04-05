import { IUser } from "Types/interfaces";
import { axiosInstance } from "./api";

export const getAllUsers = async () => {
  return await axiosInstance.get("users");
};

export const getUser = async (id: string) => {
  return await axiosInstance.get(`users/${id}`);
};

export const updateUser = async (data: IUser) => {
  return await axiosInstance.put(`users/${data._id}`, data);
};

export const createUser = async (data: IUser) => {
  return await axiosInstance.post(`users`, data);
};
