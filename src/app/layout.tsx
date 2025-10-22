import type { Metadata } from "next";
import { Quicksand } from 'next/font/google';
import "./globals.css";

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-quicksand',
});

export const metadata: Metadata = {
  title: "AryaFM - Portofolio",
  description: "Portofolio of AryaFM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} antialiased bg-slate-900 text-white font-sans transition-colors duration-300`}
      >
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}
