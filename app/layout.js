import { Inter } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Einstein",
  description: "Next-generation research platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
