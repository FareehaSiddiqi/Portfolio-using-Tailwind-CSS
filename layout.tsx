import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../component/Navbar";
import Footer from "@/component/footer";

// Initialize the Inter font with correct syntax
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer />
      </body>
    </html>
  );
}
