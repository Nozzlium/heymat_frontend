import Image from "next/image";
import LoginForm from "./ui/login-form";

export default function Page() {
  return (
    <main className="h-screen w-screen flex flex-row items-center justify-center">
      <div className="flex flex-col m-5 gap-5">
        <Image
          src="heymat.svg"
          alt="Heymat logo"
          width={300}
          height={300}
          priority
        />
        <LoginForm />
      </div>
    </main>
  );
}
