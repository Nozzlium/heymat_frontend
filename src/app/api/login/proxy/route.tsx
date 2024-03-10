import { LoginParam } from "@/app/lib/requests/login-request";
import { LOGIN } from "@/app/lib/url";
import axios, { AxiosError } from "axios";
import cookie from "cookie";

export interface AuthResponse {
  code: number;
  status: string;
  data: {
    token: string;
  };
}

export async function POST(request: Request) {
  const body: LoginParam = await request.json();

  try {
    const resp = await axios.post<AuthResponse>(LOGIN, body);

    return new Response(
      JSON.stringify({
        code: 200,
        status: "success",
        data: {
          message: "Authorized",
        },
      }),
      {
        status: 200,
        headers: {
          "Set-Cookie": cookie.serialize("token", resp.data.data.token, {
            httpOnly: true,
            sameSite: "strict",
            path: "/",
          }),
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return new Response(
        JSON.stringify(
          axiosError.response?.data ?? { message: "error", detail: "error" },
        ),
        {
          status: axiosError.response?.status ?? 500,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    } else {
      const err = error as Error;
      return new Response(
        JSON.stringify({
          message: "error",
          detail: err.message,
        }),
      );
    }
  }
}
