import React from "react";
import dynamic from "next/dynamic";
import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@/atoms/fonts";
import { Toaster } from "@/shared/utils/Toast";
import Providers from "../redux/reduxProvider";

const ToggleAccessibility = dynamic(
  () => import("@/components/accessibility/ToggleAccessibility"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Juubix",
  description: "Unlimited Opportunities...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="default">
      <body
        className={`${inter.variable} min-w-screen bg-main-gradient relative min-h-screen`}
      >
        <Toaster position="top-right" />
        <Providers>
          <ToggleAccessibility />
          {children}
        </Providers>
      </body>
    </html>
  );
}
