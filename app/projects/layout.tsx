import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "../globals.css";

const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avijit Karmaker",
  description: "Portfolio of Avijit Karmaker",
};

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <div className={interTight.className}>
        {children}
      </div>
  );
}
