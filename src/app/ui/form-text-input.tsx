export default function FormTextInput({
  placeholder,
  required,
  type,
  name,
}: {
  placeholder?: string;
  required?: boolean;
  type?: string;
  name?: string;
}) {
  return (
    <div>
      <input
        className="p-2 rounded-md w-full text-black border-gray-300 border focus:outline-red-700"
        placeholder={placeholder}
        required={required}
        type={type}
        name={name}
      />
    </div>
  );
}
