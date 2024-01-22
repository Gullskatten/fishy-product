function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h1 className="text-pretty text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
        Select a download type
      </h1>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="/download/start?platform=windows"
          className="text-base text-center font-bold px-3 text-white rounded-full py-1.5 bg-gradient-to-tr from-violet-600 to-pink-800"
        >
          Windows
        </a>
        <a
          href="/download/start?platform=mac"
          className="text-base text-center font-bold px-3 text-white rounded-full py-1.5 bg-gradient-to-tr from-violet-600 to-pink-800"
        >
          Mac
        </a>
        <a
          href="/download/start?platform=linux"
          className="text-base text-center font-bold px-3 text-white rounded-full py-1.5 bg-gradient-to-tr from-violet-600 to-pink-800"
        >
          Linux
        </a>
      </div>
    </div>
  );
}

export default Page;
