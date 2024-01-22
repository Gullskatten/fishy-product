import Image from "next/image";

function Nav() {
  return (
    <nav className="flex justify-between items-center w-full sticky top-5 z-10">
      <div className="flex items-center justify-start gap-5">
        <div>
          <a
            href="/"
            className="flex items-center gap-5 text-slate-200 dark:text-slate-200 font-extrabold text-xl xl:text-2xl"
          >
            <Image
              width={32}
              height={32}
              className="w-8 h-8"
              src="/fishy-ghost.svg"
              alt="Logo"
            />
            <span className="sm:flex hidden">
              Fish<span className="text-amber-500">y</span>
            </span>
          </a>
        </div>
      </div>
      <div className="space-x-5">
        <a href="/" className="font-medium underline underline-offset-2">
          Login
        </a>
        <a
          href="/download"
          className="text-sm truncate w-10 font-bold px-3 text-white"
        >
          Try Now
        </a>
      </div>
    </nav>
  );
}

export default Nav;
