import Button from "@/app/ui/button";
import FormTextArea from "@/app/ui/form-text-area";
import FormTextInput from "@/app/ui/form-text-input";

export default function Page() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <div className="md:w-3/5 w-full">
          <form>
            <div className="flex flex-col gap-2 ">
              <FormTextInput placeholder="Judul" type="text" required />
              <FormTextInput
                placeholder="Target pengeluaran maksimal"
                type="number"
                required
              />
              <input type="checkbox" className="accent-red-600" />
              <FormTextArea placeholder="Deskripsi singkat" />
              <Button text="Kirim" />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
