import React, { Suspense } from "react";
import Loading from "./loading";

interface ChatLayoutProps {
  children: React.ReactNode;
}

const ChatLayout = ({ children }: ChatLayoutProps) => (
  <div className="justfify-center flex w-full flex-col border-t-[0.5px] border-custom-divider-gray p-3 md:flex-row">
    <Suspense fallback={<Loading />}>
      <div className="flex w-full justify-center">{children}</div>
    </Suspense>
  </div>
);

export default ChatLayout;
