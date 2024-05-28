import { NextResponse,type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL ("/about",req.url));
}

export const config={
    matcher:"/profile"
}

//when i got to /profile it will redirect me to /about using middleware