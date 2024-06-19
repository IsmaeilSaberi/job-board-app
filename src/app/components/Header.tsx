import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container flex items-center justify-between mx-auto my-4">
        <Link className="font-bold text-xl" href={"/"}>
          Job Board
        </Link>
        <nav className="flex gap-2  *:py-2 *:px-4 *:rounded-md">
          <Link className="bg-gray-200" href={"/login"}>
            Login
          </Link>
          <Link className="bg-blue-500 text-white" href={"/new-listing"}>
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  );
}
