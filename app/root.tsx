import { cssBundleHref } from "@remix-run/css-bundle";
import { redirect, type LinksFunction } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

const allowList = ["/countdown", "/login", "/something", "/products/*" ];

export const loader = async ({ request }: { request: Request }) => {
  const pathname = new URL(request.url).pathname;

  const hypeMode = {
    active: true,
    start: new Date("2021-07-01T00:00:00"),
    end: new Date("2021-07-02T00:00:00"),
  };

  if (!hypeMode.active) {
    return null;
  }

  if (allowList.includes(pathname)) {
    return null;
  }

  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/countdown",
  });
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
