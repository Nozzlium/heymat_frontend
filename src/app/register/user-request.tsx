import axios from "axios";
import { REGISTER } from "../lib/url";
import User from "./user";

export interface RegisterParam {
  username: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  data: User;
}

class UserRequest {
  register: (param: RegisterParam) => Promise<User> = async (
    param: RegisterParam,
  ) => {
    const response = await axios.post<RegisterResponse>(REGISTER, param);

    return response.data.data;
  };
}

const userRequest = new UserRequest();

export default userRequest;
