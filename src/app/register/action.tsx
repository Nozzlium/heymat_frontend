"use server";

import userRequest from "../lib/requests/user-request";
import { UIStatus } from "../lib/common/ui-state";
import axios from "axios";
import { HeymatError } from "../lib/errors";
import { redirect } from "next/navigation";

export interface RegisterState {
  status: UIStatus.IDLE | UIStatus.LOADING | UIStatus.SUCCESS | UIStatus.ERROR;
  message: string;
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
      message: "password tidak sesuai",
    };
  }

  try {
    const user = await userRequest.register({
      username: username,
      email: email,
      password: password,
    });
    if (user.id !== 0) {
      return {
        status: UIStatus.SUCCESS,
        message: `${user.username}, akunmu sudah berhasil dibuat. Kamu sudah bisa masuk ke dashboardmu.`,
      };
    }
    return {
      status: UIStatus.ERROR,
      message: "error",
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

export async function goToLogin() {
  redirect("/login");
}
