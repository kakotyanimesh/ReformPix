import type { Metadata } from "next";
import "./globals.css";
import { plexMono, plexSans } from "@/lib/font.config";
import { Navbar } from "@/components/navbar";
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: "ReformPix",
  description: "All-in-one PDF and image utility  convert, compress, edit, and more right in your browser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plexMono.variable} ${plexSans.variable}`}>
      <body
        className={`antialiased`}
      >
        <Navbar />

        {children}
        <Toaster richColors position="top-right"/>
      </body>
    </html>
  );
}
