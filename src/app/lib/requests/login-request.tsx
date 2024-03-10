import axios from "axios";

export interface LoginParam {
  identity: string;
  password: string;
}

interface LoginResponse {
  code: number;
  status: string;
  data: {
    message: string;
  };
}

class LoginRequest {
  login: (param: LoginParam) => Promise<string> = async (param: LoginParam) => {
    const response = await axios.post<LoginResponse>("api/login/proxy", param);

    return response.data.data.message;
  };
}

const loginRequest = new LoginRequest();

export default loginRequest;
