import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "UniPrep101",
  description: "Preparing students for global opportunities through Singapore education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body
        className={`${redHatDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
