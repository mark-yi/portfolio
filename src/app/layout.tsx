import "~/styles/globals.css";

import { type Metadata } from "next";
import { Manrope } from "next/font/google";
import Link from "next/link";

export const metadata: Metadata = {
  title: "mark's portfolio",
  description: "mark's portfolio - things i do and like",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

function Navigation() {
  return (
    <nav className="w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="w-2/5 mx-auto px-4 py-4">
        <div className="flex gap-6">
          <Link href="/why-i-do" className="text-gray-600 hover:text-gray-900">
            why i do
          </Link>
          <Link href="/what-i-did" className="text-gray-600 hover:text-gray-900">
            what i did
          </Link>
          <Link href="/things-i-like" className="text-gray-600 hover:text-gray-900">
            things i like
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body className="bg-white text-gray-900">
        <Navigation />
        <main className="pt-4">
          {children}
        </main>
      </body>
    </html>
  );
}
