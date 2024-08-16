import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avijit Karmaker",
  description: "Portfolio of Avijit Karmaker",
};

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <nav>
          {/* Admin-specific navigation */}
          <a href="/admin">Admin Dashboard</a>
          <a href="/admin/settings">Settings</a>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
