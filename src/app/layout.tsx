import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LayoutProvider } from "@/components/LayoutContext";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wedding of Fani & Ibnu",
  description: "You are cordially invited to our wedding celebration",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
      </Suspense>
    </LayoutProvider>
  );
}
