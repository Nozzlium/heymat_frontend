export default function FormTextArea({
  placeholder,
  required,
  name,
  disabled,
  alert,
}: {
  placeholder?: string;
  required?: boolean;
  type?: string;
  name?: string;
  disabled?: boolean;
  alert?: string;
}) {
  return (
    <div>
      <textarea
        className="p-2 rounded-md w-full text-black border-gray-300 border focus:outline-red-700 resize-none"
        placeholder={placeholder}
        required={required}
        name={name}
        disabled={disabled}
        rows={5}
      />
      {alert ? <p className="">{alert}</p> : null}
    </div>
  );
}
