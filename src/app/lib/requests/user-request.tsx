import axios from "axios";
import User from "../data/user";
import { REGISTER } from "../url";

export interface RegisterParam {
  username: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  code: number;
  status: string;
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
