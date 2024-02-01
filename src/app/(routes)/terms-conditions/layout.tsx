import React from "react";

interface ConditionsLayoutProps {
  children: React.ReactNode;
}

function ConditionsLayout({ children }: ConditionsLayoutProps) {
  return (
    <section
      id="terms-conditions"
      className="flex-cols flex min-h-screen items-center justify-center"
    >
      <div className="flex-cols my-12 flex min-h-85vh w-5/6 items-center justify-center rounded-[10px] bg-custom-white text-black md:m-4 md:rounded-[25px]">
        {children}
      </div>
    </section>
  );
}

export default ConditionsLayout;
