export default function Button({
  text,
  className,
  onClick,
}: {
  text?: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`${className ?? "bg-red-700 text-white p-2 font-semibold rounded-md shadow-lg"}`}
      onClick={onClick}
    >
      {text ?? ""}
    </button>
  );
}
