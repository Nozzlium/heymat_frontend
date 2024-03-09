"use client";

import Button from "@/app/ui/button";
import FormTextInput from "@/app/ui/form-text-input";
import Link from "next/link";
import { FormEvent } from "react";

export default function RegisterForm() {
  function onHandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col bg-white p-5 rounded-lg drop-shadow-lg sm:w-[300px] w-full">
      <form className="flex flex-col gap-4" onSubmit={onHandleSubmit}>
        <FormTextInput
          placeholder="Username"
          name="username"
          type="text"
          required
        />
        <FormTextInput placeholder="Email" name="email" type="email" required />
        <FormTextInput
          placeholder="Kata sandi"
          name="password"
          type="password"
          required
        />
        <FormTextInput
          placeholder="Konfirmasi kata sandi"
          name="confirmPassword"
          type="password"
          required
        />
        <p className="text-xs text-center">
          Pihak kami tidak akan membagikan informasi email anda ke pihak lain
          manapun
        </p>
        <Button text="Daftar" />
        <p className="text-sm text-center">
          Sudah punya akun? {<Link href="/login">Masuk!</Link>}
        </p>
      </form>
    </div>
  );
}
