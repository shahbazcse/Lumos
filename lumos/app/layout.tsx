import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import ModalProvider from "@/components/ModalProvider";
import ToasterProvider from "@/components/ToasterProvider";
import CrispProvider from "@/components/CrispProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumos AI",
  description: "Generate real-time content using AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
