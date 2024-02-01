import React from "react";

import AppNavBar from "@/components/navbar/AppNavBar";

interface CoreLayoutProps {
  children: React.ReactNode;
}

const CoreLayout = ({ children }: CoreLayoutProps) => (
  <main className="m-auto min-h-screen w-full">
    <div className="inset-x-0 top-0">
      <AppNavBar />
    </div>
    <div className="relative mx-auto mb-12 h-max w-[95vw] rounded-[20px] bg-custom-blue-dark text-custom-white md:mx-auto md:min-h-[65vh] md:w-[85vw] md:max-w-[1372px]">
      {children}
    </div>
  </main>
);

export default CoreLayout;
