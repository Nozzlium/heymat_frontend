"use client";

import Button from "@/app/ui/button";
import FormTextInput from "@/app/ui/form-text-input";
import Link from "next/link";
import { RegisterState, register } from "../action";
import { UIStatus } from "@/app/lib/common/ui-state";
import { useFormState, useFormStatus } from "react-dom";

const initState: RegisterState = {
  status: UIStatus.IDLE,
  errorMessage: "",
};

function RegisterButton() {
  const { pending } = useFormStatus();

  return <Button text="Daftar" loading={pending} />;
}

export default function RegisterForm() {
  const [formState, formAction] = useFormState(register, initState);

  return (
    <div className="flex flex-col bg-white p-5 rounded-lg drop-shadow-lg sm:w-[300px] w-full">
      <form className="flex flex-col gap-4" action={formAction}>
        <p>{formState.errorMessage}</p>
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
        <RegisterButton />
        <p className="text-sm text-center">
          Sudah punya akun? {<Link href="/login">Masuk!</Link>}
        </p>
      </form>
    </div>
  );
}
