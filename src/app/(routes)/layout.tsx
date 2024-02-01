import React from "react";
import MainPageFooter from "@/components/footer/MainPageFooter";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="min-w-screen relative flex min-h-screen flex-col">
    {children}

    <MainPageFooter />
  </div>
);

export default Layout;
