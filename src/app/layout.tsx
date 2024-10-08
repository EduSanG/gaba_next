import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import AddBootsrap from "@/components/addBootstrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GABA Servicios",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <AddBootsrap />
      </body>
    </html>
  );
}