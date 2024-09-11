import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const lexendDeca = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Team",
  description: "Team is a collaboration tool for remote teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexendDeca.className} antialiased scroll-smooth bg-secondary`}>
        {children}
      </body>
    </html>
  );
}
