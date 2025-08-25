/**
 * Portfolio
 * Copyright (C) 2025 Maxim (https://github.com/maximjsx/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */
import { NextResponse } from "next/server";
import configuration from "/CONFIG.json";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname === "/home") {
    return NextResponse.redirect(
      new URL(configuration.global.home_route || "/", req.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/home",
};
