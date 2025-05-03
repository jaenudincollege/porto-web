import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/navbar";
import { roboto } from "./_utils/font";

export const metadata: Metadata = {
  title: "Portfolio Jaenudin",
  description: "Showcasing my developer work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
