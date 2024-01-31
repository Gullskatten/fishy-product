import Image from "next/image";

export default function Home() {
  return (
    <main className="flex grow">
      <div className="relative flex flex-col items-center justify-center flex-1 gap-10">
        <div className="relative h-64">
          <Image
            className=" w-72 h-72 -z-0 sm:animate-wiggle pointer-events-none"
            src="/fishy-ghost.svg"
            alt="Fishy Product"
            width={288}
            height={288}
          />
        </div>
        <div className="justify-center flex flex-col items-center gap-5">
          <div className="p-3 flex flex-col gap-1 ">
            <h1 className="text-pretty text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
              A <span className="text-amber-500">Fishy</span> Product
            </h1>
            <p className="text-balance text-center text-gray-500 dark:text-gray-400">
              The product you will get hooked on.
            </p>
          </div>
          <a
            href="/download"
            className="text-base font-bold w-full text-center justify-center flex px-3 text-white rounded-full py-1.5 bg-gradient-to-tr from-violet-600 to-pink-800 hover:brightness-110"
          >
            Try for Free
          </a>
        </div>
        <div className="mt-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-gray-100">
              Pricing
            </h2>
            <p className="text-balance text-center text-gray-500 dark:text-gray-400">
              Choose a plan that fits your needs.
            </p>
          </div>
        </div>
        <div className="flex gap-3 flex-col">
          <ul className="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <li className="p-10 rounded-md bg-black border border-teal-800 flex flex-col gap-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
                  Free
                </h3>
                <p className="text-balance text-center text-gray-500 dark:text-gray-400">
                  Free forever.
                </p>
              </div>
              <ul className="list-disc mt-5">
                <li>
                  <p className="text-balance text-gray-500 dark:text-gray-400">
                    1 user
                  </p>
                </li>
                <li>
                  <p className="text-balance  text-gray-500 dark:text-gray-400">
                    1 project
                  </p>
                </li>
                <li>
                  <p className="text-balance  text-gray-500 dark:text-gray-400">
                    1GB storage
                  </p>
                </li>
              </ul>
              <div className="flex justify-center mt-5 w-full">
                <a
                  href="/"
                  className="text-center hover:brightness-110 font-bold w-full text-white rounded-full py-1.5 bg-gradient-to-tr from-teal-600 to-teal-800"
                >
                  Get Started
                </a>
              </div>
            </li>
            <li className="p-10 relative rounded-md bg-black border border-violet-800 flex flex-col gap-3 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] shadow-blue-700/50">
              <div className="absolute -top-2 right-3">
                <div className="bg-violet-800 text-violet-300 rounded-full text-xs px-3">
                  <span>Top Pick</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
                  Premium
                </h3>
                <p className="text-balance text-center text-gray-500 dark:text-gray-400">
                  $5/month
                </p>
              </div>
              <ul className="list-disc mt-5">
                <li>
                  <p className="text-balance text-gray-500 dark:text-gray-400">
                    5 users
                  </p>
                </li>
                <li>
                  <p className="text-balance  text-gray-500 dark:text-gray-400">
                    10 projects
                  </p>
                </li>
                <li>
                  <p className="text-balance  text-gray-500 dark:text-gray-400">
                    10GB storage
                  </p>
                </li>
              </ul>
              <div className="flex justify-center mt-5 w-full">
                <a
                  href="/download"
                  className="text-center hover:brightness-110 font-bold text-white rounded-full py-1.5 bg-gradient-to-tr from-violet-600 to-pink-800 w-full"
                >
                  Free Trial
                </a>
              </div>
            </li>
            <li className="p-10 rounded-md bg-black border border-violet-900 flex flex-col gap-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
                  Scale-Up
                </h3>
                <p className="text-balance text-center text-gray-500 dark:text-gray-400">
                  $15/month
                </p>
              </div>
              <ul className="list-disc mt-5">
                <li>
                  <p className="text-balance text-gray-500 dark:text-gray-400">
                    25* users
                  </p>
                </li>
                <li>
                  <p className="text-balance  text-gray-500 dark:text-gray-400">
                    1000* projects
                  </p>
                </li>
                <li>
                  <p className="text-balance  text-gray-500 dark:text-gray-400">
                    1TB* storage
                  </p>
                </li>
              </ul>
              <div className="flex justify-center mt-5 w-full">
                <a
                  href="/"
                  className="text-center hover:brightness-110 font-bold w-full text-white rounded-full py-1.5 bg-gradient-to-tr from-violet-800 to-violet-900"
                >
                  Register
                </a>
              </div>
            </li>
            <li className="p-10 rounded-md bg-black border border-violet-950 flex flex-col gap-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
                  Enterprise
                </h3>
                <p className="text-balance text-center text-gray-500 dark:text-gray-400">
                  Contact us
                </p>
              </div>

              <div className="list-disc mt-5">
                <p className="text-wrap text-gray-500 dark:text-gray-400">
                  Custom Domain?
                </p>
                <p className="text-wrap text-gray-500 dark:text-gray-400">
                  SLA requirements?
                </p>
                <p className="text-wrap text-gray-500 dark:text-gray-400">
                  Premium support?
                </p>
              </div>
              <div className="flex justify-center mt-5 w-full">
                <a
                  href="/"
                  className="text-center hover:brightness-110 font-bold w-full text-white rounded-full py-1.5 bg-gradient-to-tr from-violet-800 to-violet-900"
                >
                  Contact Us
                </a>
              </div>
            </li>
          </ul>
          <div className="mt-5">
            <ul>
              <li>
                <p className="text-balance text-gray-500 dark:text-gray-400">
                  * $1 per additional user after 25 users
                </p>
              </li>
              <li>
                <p className="text-balance text-gray-500 dark:text-gray-400">
                  * $1 per additional project after 1000 projects
                </p>
              </li>
              <li>
                <p className="text-balance text-gray-500 dark:text-gray-400">
                  * $1 per additional GB after 1TB
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
