import React from "react";
import MatchingNavMenu from "@/components/navbar/MatchingNavMenu";

interface MatchingLayoutProps {
  children: React.ReactNode;
}

const MatchingLayout = ({ children }: MatchingLayoutProps) => (
  <section className="min-w-screen flex min-h-[80vh] flex-col lg:flex-row lg:place-items-stretch">
    <div className="my-2 lg:my-4 lg:border-e-[0.5px] lg:border-e-custom-divider-gray">
      <div className="my-12 hidden lg:block">
        <MatchingNavMenu />
      </div>
    </div>
    <div className="min-h-[80vh] w-full">{children}</div>
  </section>
);

export default MatchingLayout;
