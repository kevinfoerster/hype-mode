import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";



// export default function Screen() {
//     return (
//       <Form method="post">
//         <input type="text" name="email" required />
//         <input
//           type="password"
//           name="password"
//           autoComplete="current-password"
//           required
//         />
//         <button>Sign In</button>
//       </Form>
//     );
//     }
  
  // Finally, we can export a loader function where we check if the user is
  // authenticated with `authenticator.isAuthenticated` and redirect to the
  // dashboard if it is or return null if it's not
  export async function loader({ request }: LoaderArgs) {
    // If the user is already authenticated redirect to /dashboard directly

      await authenticator.logout(request, { redirectTo: "/login" });
  }