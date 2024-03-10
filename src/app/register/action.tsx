"use server";

import userRequest from "../lib/requests/user-request";
import { UIStatus } from "../lib/common/ui-state";

export interface RegisterState {
  status: UIStatus.IDLE | UIStatus.SUCCESS | UIStatus.ERROR;
  errorMessage: string;
}

export async function register(
  _prevState: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  const username = formData.get("username")?.toString() ?? "";
  const email = formData.get("email")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";
  const confirmPassword = formData.get("confirmPassword")?.toString() ?? "";
  if (password !== confirmPassword) {
    return {
      status: UIStatus.ERROR,
      errorMessage: "password tidak sesuai",
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    const user = await userRequest.register({
      username: username,
      email: email,
      password: password,
    });
    if (user.id !== 0) {
      return { status: UIStatus.SUCCESS, errorMessage: "" };
    }
    return {
      status: UIStatus.ERROR,
      errorMessage: "error",
    };
  } catch (error) {
    return {
      status: UIStatus.ERROR,
      errorMessage: "error",
    };
  }
}
