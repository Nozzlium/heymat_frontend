export function ErrorAlert({
  message,
  show,
}: {
  message?: string;
  show?: boolean;
}) {
  if (!show) {
    return null;
  }

  return (
    <p className="bg-red-500 text-white p-3 rounded-md text-sm font-semibold">
      {message ?? ""}
    </p>
  );
}
