import type { Metadata } from "next";
import "./globalStyles/globals.css";
import { openSansFont } from "@/styles/fonts";
import ClientLayout from "@/components/client-layout/client-layout";

export const metadata: Metadata = {
  title: "Резервиум",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSansFont.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
