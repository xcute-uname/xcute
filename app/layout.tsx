import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const fontStyle = Poppins({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "xcute | coder's home",
  description: "xcute developers is a community of all computer science students and computers or technology lovers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontStyle.className}>{children}</body>
    </html>
  );
}
