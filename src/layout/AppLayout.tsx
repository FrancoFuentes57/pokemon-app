"use client";
/* Components */
import { Header } from "@/components/ui/Header/Header";

interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="w-full mb-8">
      <Header />
      <main className="w-[95%] mx-auto">{children}</main>
    </div>
  );
};

export { AppLayout };
