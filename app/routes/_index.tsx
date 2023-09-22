import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node"; // or cloudflare/deno

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({request}: LoaderFunctionArgs) => {
  console.log(request);
  return json({ ok: true });
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            href="login"
          >
            login
          </a>
        </li>
        <li>
          <a
            href="logout"
          >
            logout
          </a>
        </li>
        <li>
          <a
            href="countdown"
          >
            countdown
          </a>
        </li>
        <li>
          <a
            href="forbidden"
          >
            forbidden page
          </a>
        </li>
        <li>
          <a
            href="something"
          >
            something page
          </a>
        </li>
      </ul>
    </div>
  );
}
