import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_components/nav";
import Footer from "./_components/footer";
import Background from "./_components/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fishness",
  description: "Your one-stop shop for a fishy product.",
  metadataBase: new URL("https://fishy-product.com/"),
  // Search engines will use this as the preview text for the page.
  openGraph: {
    images: [
      {
        url: "https://fishy-product.com/fishy-product.png",
        width: 256,
        height: 256,
        alt: "Fishy Product Logo",
      },
    ],
    type: "website",
    locale: "en_US",
    url: "https://fishy-product.com",
    siteName: "Fishy Product",
    title: "Fishy Product in 2024",
    description:
      "Need fishyness in 2024? Your one-stop shop for a fishy product.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-5 min-h-screen flex flex-col`}>
        <Background />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
