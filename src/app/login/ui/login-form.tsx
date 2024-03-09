"use client";

import Button from "@/app/ui/button";
import FormTextInput from "@/app/ui/form-text-input";
import Link from "next/link";
import { FormEvent } from "react";

export default function LoginForm() {
  function onHandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col bg-white p-5 rounded-lg drop-shadow-lg sm:w-[300px] w-full">
      <form className="flex flex-col gap-4" onSubmit={onHandleSubmit}>
        <FormTextInput
          placeholder="Username atau Email"
          name="identity"
          type="password"
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
        <Button text="Daftar" />
        <p className="text-sm text-center">
          Belum punya akun? {<Link href="/register">Buat akun!</Link>}
        </p>
      </form>
    </div>
  );
}
