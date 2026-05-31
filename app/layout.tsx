import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Avijit Karmaker — Full-Stack Developer & Tech Lead",
  description:
    "Full-Stack Developer and Tech Lead based in Helsinki, Finland. Currently leading engineering at GoDoc (funded fintech). Open to roles in Finland, Germany, Norway, Sweden, UK, and Denmark.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Helsinki",
    "Finland",
    "Remote",
  ],
  authors: [{ name: "Avijit Karmaker" }],
  openGraph: {
    title: "Avijit Karmaker — Full-Stack Developer & Tech Lead",
    description:
      "Full-Stack Developer and Tech Lead based in Helsinki, Finland.",
    url: "https://avijitkarmaker.com",
    siteName: "Avijit Karmaker",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono bg-vsc-bg text-vsc-text antialiased`}>
        {children}
      </body>
    </html>
  );
}