import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";

const roboto = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
      <body className={`${roboto.className}  antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
