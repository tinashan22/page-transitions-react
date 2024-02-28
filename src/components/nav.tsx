import Link from "next/link";

export default function GlobalNav() {
  return (
    <div className=" h-14 min-w-full top-0 fixed flex items-center justify-end  bg-transparent text-slate-800 ">
      <div className="w-1/2 flex justify-around px-32">
        <Link
          className="hover:underline hover:underline-offset-2 transition-all delay-150"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:underline hover:underline-offset-2 transition-all delay-150"
          href="/about"
        >
          About
        </Link>
        <Link
          className="hover:underline hover:underline-offset-2 transition-all delay-150"
          href="/contact"
        >
          Contact
        </Link>{" "}
        {/* <button className="group -m-2.5 rounded-full p-2.5 transition hover:bg-white/10">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 fill-black group-hover:fill-neutral-200"
          >
            <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z"></path>
            <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z"></path>

            <path d="M2 6h20v2H2zM2 16h20v2H2z"></path>
          </svg>
        </button> */}
      </div>
    </div>
  );
}
