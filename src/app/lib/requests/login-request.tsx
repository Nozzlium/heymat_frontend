import axios from "axios";
import { LOGIN } from "../url";

export interface LoginParam {
  identity: string;
  password: string;
}

export interface LoginResponse {
  code: number;
  status: string;
  data: {
    token: string;
  };
}

class LoginRequest {
  login: (param: LoginParam) => Promise<string> = async (param: LoginParam) => {
    const response = await axios.post<LoginResponse>(LOGIN, param);

    return response.data.data.token;
  };
}

const loginRequest = new LoginRequest();

export default loginRequest;
