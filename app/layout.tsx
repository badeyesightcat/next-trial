import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { inter } from "@/public/font";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "bug tracker",
  description: "Generated using Nexts14, Tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-[85vh] bg-slate-200 flex flex-col gap-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
