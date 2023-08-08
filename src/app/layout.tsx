import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LukeJ Portfolio",
  description: "LukeJ's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // TODO: Change so i put the snap classes in main element in page.tsx
    <html lang="en" className="snap-y snap-mandatory bg-black">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
