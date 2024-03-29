import "@/app/ui/globals.css";

import { Metadata } from "next";
import { HeaderLoBram } from "@/app/ui/headerLoBram";
import { overlock, quattrocento } from "@/app/ui/fonts";
import Footer from "@/app/ui/footer";

export const metadata: Metadata = {
  title: "Lo Bram",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ca" className="light">
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>

      <body className={`${quattrocento.className} bg-blue-50 text-gray-700`}>
        <HeaderLoBram lang="ca" />

        {children}
        <Footer />
      </body>
    </html>
  );
}
