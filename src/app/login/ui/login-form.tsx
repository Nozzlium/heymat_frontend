"use client";

import loginRequest from "@/app/lib/requests/login-request";
import Button from "@/app/ui/button";
import FormTextInput from "@/app/ui/form-text-input";
import Link from "next/link";
import { FormEvent } from "react";

export default function LoginForm() {
  function onHandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const username = formData.get("identity")?.toString() ?? "";
    const password = formData.get("password")?.toString() ?? "";
    (async () => {
      try {
        const message = await loginRequest.login({
          identity: username,
          password: password,
        });
        console.log(message);
      } catch (error) {
        console.log(error);
      }
    })();
  }

  return (
    <div className="flex flex-col bg-white p-5 rounded-lg drop-shadow-lg sm:w-[300px] w-full">
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
        <Button text="Masuk" />
        <p className="text-sm text-center">
          Belum punya akun? {<Link href="/register">Buat akun!</Link>}
        </p>
      </form>
    </div>
  );
}
