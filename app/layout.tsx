import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-purple-700/60 to-blue-500/90 max-w-7xl mx-auto">
        <main className="bg-slate-50/50 shadow-2xl drop-shadow-2xl">
          <Header title="Netflix clone" />
          {children}
        </main>
      </body>
    </html>
  );
}
