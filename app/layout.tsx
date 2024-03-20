import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

const inter = localFont({
  src: [
    {
      path: "../public/Maladorit-bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/Maladorit-normal.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Milo",
  description: "buy solona tokens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
