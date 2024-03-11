import LoadingSpinner from "./loading-spinner";

export default function Button({
  text,
  className,
  onClick,
  loading,
}: {
  text?: string;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
}) {
  return (
    <button
      className={`${className ?? "bg-red-700 text-white p-2 font-semibold rounded-md shadow-lg "}`}
      onClick={onClick}
      disabled={loading}
    >
      {!loading ? text ?? "" : <LoadingSpinner />}
    </button>
  );
}
