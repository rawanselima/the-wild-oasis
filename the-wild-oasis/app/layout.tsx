import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Wild Oasis",
  description: "Explore luxury cabins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${josefinSans.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-dark-gray text-slate-100 flex flex-col font-sans relative">
        <div className="bg-yellow text-slate-900 text-center py-2 text-sm font-medium z-50 shadow-sm">
          👋 You're in demo mode! You can log into the app, but you can create only <span className="font-bold italic">one short</span> reservation
        </div>
        <Header />
        <div className="flex-1 grid px-8 py-12">
          <main className="max-w-7xl mx-auto w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
