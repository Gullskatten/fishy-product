import exp from "constants";
import React from "react";

function DownloadLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-0 flex-grow items-center justify-center">
      {children}
    </div>
  );
}

export default DownloadLayout;
