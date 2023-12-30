import "@/app/ui/globals.css";

import { Metadata } from "next";
import { builder } from "@builder.io/sdk";
import { Header } from "@/app/ui/header";
import { overlock, quattrocento } from "@/app/ui/fonts";
import Footer from "@/app/ui/footer";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const metadata: Metadata = {
  title: "Lo Bram",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // load structured data from builder.io named "main-links" of type main-links
  const links = await builder.get("navigation-links", {}).toPromise();

  return (
    <html lang="ca">
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>

      <body className={`${quattrocento.className} bg-blue-50 text-gray-700`}>
        <Header links={links} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
