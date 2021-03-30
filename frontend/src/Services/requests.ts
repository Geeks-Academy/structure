import { axiosInstance } from "./api";

// Quiz
export const getAllUsers = async () => {
  return await axiosInstance.get("users");
};
