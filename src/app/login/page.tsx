import LoginForm from "./ui/login-form";

export default function Page() {
  return (
    <main className="h-screen w-screen flex flex-row items-center justify-center">
      <div className="flex flex-col m-5">
        <LoginForm />
      </div>
    </main>
  );
}
