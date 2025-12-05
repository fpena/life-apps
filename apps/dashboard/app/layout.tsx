import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Life Apps Dashboard",
  description: "Your central hub for managing different aspects of your lifestyle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
