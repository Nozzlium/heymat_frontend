"use client";

import Button from "@/app/ui/button";
import FormTextInput from "@/app/ui/form-text-input";
import Link from "next/link";
import { UIStatus } from "@/app/lib/common/ui-state";
import { RegisterState, goToLogin, register } from "./action";
import { FormEvent, useState } from "react";
import { ErrorAlert } from "../ui/alerts";

const initState: RegisterState = {
  status: UIStatus.IDLE,
  message: "",
};

export default function RegisterForm() {
  const [registerState, setRegisterState] = useState<RegisterState>(initState);

  function onHandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setRegisterState((prev) => {
      const next = { ...prev };
      next.status = UIStatus.LOADING;
      return next;
    });

    (async () => {
      const nextState = await register(
        registerState,
        new FormData(e.currentTarget),
      );
      setRegisterState(nextState);
    })();
  }

  if (registerState.status === UIStatus.SUCCESS) {
    return (
      <div className="flex flex-col bg-white p-5 rounded-lg drop-shadow-lg sm:w-[300px] w-full gap-2">
        <p className="text-center font-bold text-lg">Sukses!</p>
        <p className="text-left">{registerState.message}</p>
        <Button
          text="Lanjut"
          onClick={async () => {
            goToLogin();
          }}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white p-5 rounded-lg drop-shadow-lg gap-2 sm:w-[300px] w-full">
      <ErrorAlert
        message={registerState.message}
        show={registerState.status === UIStatus.ERROR}
      />
      <form className="flex flex-col gap-4" onSubmit={onHandleSubmit}>
        <FormTextInput
          placeholder="Username"
          name="username"
          type="text"
          required
          disabled={registerState.status === UIStatus.LOADING}
        />
        <FormTextInput
          placeholder="Email"
          name="email"
          type="email"
          required
          disabled={registerState.status === UIStatus.LOADING}
        />
        <FormTextInput
          placeholder="Kata sandi"
          name="password"
          type="password"
          required
          disabled={registerState.status === UIStatus.LOADING}
        />
        <FormTextInput
          placeholder="Konfirmasi kata sandi"
          name="confirmPassword"
          type="password"
          required
          disabled={registerState.status === UIStatus.LOADING}
        />
        <p className="text-xs text-center">
          Pihak kami tidak akan membagikan informasi email anda ke pihak lain
          manapun
        </p>
        <Button
          text="Daftar"
          loading={registerState.status === UIStatus.LOADING}
        />
        <p className="text-sm text-center">
          Sudah punya akun? {<Link href="/login">Masuk!</Link>}
        </p>
      </form>
    </div>
  );
}
