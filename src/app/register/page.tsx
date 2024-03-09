import RegisterForm from "./ui/register-form";

export default function Page() {
  return (
    <main className="w-screen h-screen flex flex-row items-center justify-center">
      <div className="flex flex-col m-5 gap-2">
        <p className="text-4xl text-gray-600 font-extrabold">Buat akun</p>
        <RegisterForm />
      </div>
    </main>
  );
}
