"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { UIStatus } from "../lib/common/ui-state";
import { HeymatError } from "../lib/errors";
import loginRequest from "../lib/requests/login-request";

export interface LoginState {
  status: UIStatus.IDLE | UIStatus.LOADING | UIStatus.SUCCESS | UIStatus.ERROR;
  message: string;
}

export async function handleLogin(formData: FormData): Promise<LoginState> {
  const username = formData.get("identity")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";
  try {
    const token = await loginRequest.login({
      identity: username,
      password: password,
    });
    cookies().set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 2,
    });
    return {
      status: UIStatus.SUCCESS,
      message: "",
    };
  } catch (error) {
    let message = "error";
    if (axios.isAxiosError(error)) {
      const heymatErr = error.response?.data as HeymatError;
      if (heymatErr) {
        message = heymatErr.error.detail;
      }
    }
    return {
      status: UIStatus.ERROR,
      message: message,
    };
  }
}
