// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
    const url = req.nextUrl.clone();
    const abCookie = req.cookies.get("ab-variant")?.value;

    // If cookie exists, redirect to same variant
    if (abCookie) {
        url.pathname = `/${abCookie}`;
        return NextResponse.redirect(url);
    }

    // Randomly assign variant A or B
    const randomVariant = Math.random() < 0.5 ? "variantA" : "variantB";

    // Set cookie and redirect
    const res = NextResponse.redirect(new URL(`/${randomVariant}`, req.url));
    res.cookies.set("ab-variant", randomVariant, { path: "/", maxAge: 60 * 60 * 24 * 30 });
    return res;
}

export const config = {
    matcher: ["/"],
};
