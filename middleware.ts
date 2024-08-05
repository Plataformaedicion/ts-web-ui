import { NextRequest } from "next/server";
import { updateSession } from "./src/utils/auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}