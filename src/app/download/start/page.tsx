function DownloadSuccessBanner() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h1 className="text-pretty text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
        Thanks for downloading!
      </h1>
      <p className="text-slate-500">Your download should begin shortly..</p>
    </div>
  );
}

export default DownloadSuccessBanner;
