import Link from "next/link";
import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
  signOut,
} from "@workos-inc/authkit-nextjs";

export default async function Header() {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();
  return (
    <header>
      <div className="container flex items-center justify-between mx-auto my-4">
        <Link className="font-bold text-xl" href={"/"}>
          Job Board
        </Link>
        <nav className="flex gap-2">
          {!user && (
            <Link className="bg-gray-200 rounded-md py-2 px-4" href={signInUrl}>
              Login
            </Link>
          )}
          {user && (
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                type="submit"
                className="bg-gray-200 rounded-md py-2 px-4"
              >
                Logout
              </button>
            </form>
          )}
          <Link
            className="bg-blue-500 text-white rounded-md py-2 px-4"
            href={"/new-listing"}
          >
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  );
}
