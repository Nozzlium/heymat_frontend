"use client";

import Button from "@/app/ui/button";
import FormTextInput from "@/app/ui/form-text-input";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { UIStatus } from "@/app/lib/common/ui-state";
import { LoginState, handleLogin } from "./action";
import { ErrorAlert } from "../ui/alerts";

export default function LoginForm() {
  const [loginState, setLoginState] = useState<LoginState>({
    status: UIStatus.IDLE,
    message: "",
  });

  function onHandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoginState((prev) => {
      const next = { ...prev };
      next.status = UIStatus.LOADING;
      return next;
    });
    const formData = new FormData(e.currentTarget);

    (async () => {
      const nextState = await handleLogin(formData);
      setLoginState(nextState);
    })();
  }

  return (
    <div className="flex flex-col bg-white p-5 rounded-lg drop-shadow-lg gap-2 sm:w-[300px] w-full">
      <ErrorAlert
        message={loginState.message}
        show={loginState.status === UIStatus.ERROR}
      />
      <form className="flex flex-col gap-4" onSubmit={onHandleSubmit}>
        <FormTextInput
          placeholder="Username atau Email"
          name="identity"
          type="text"
          required
        />
        <div>
          <FormTextInput
            placeholder="Kata sandi"
            name="password"
            type="password"
            required
          />
          <Link className="text-xs text-right" href="/">
            Lupa kata sandi
          </Link>
        </div>
        <Button text="Masuk" loading={loginState.status === UIStatus.LOADING} />
        <p className="text-sm text-center">
          Belum punya akun? {<Link href="/register">Buat akun!</Link>}
        </p>
      </form>
    </div>
  );
}
