import { cookies } from "next/headers";

export async function GET(_request: Request) {
  const cookiesStore = cookies();

  return new Response(
    JSON.stringify({
      test: cookiesStore.get("token"),
    }),
  );
}
