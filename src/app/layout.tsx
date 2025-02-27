import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";

const monggoland = localFont({
  src: [
    {
      path: "./fonts/MonggolandRegular.woff",
      weight: "400",
    },
    {
      path: "./fonts/MonggolandRegular.woff2",
      weight: "400",
    },
  ],
  variable: "--font-monggoland",
});

const ptSerif = localFont({
  src: [
    {
      path: "./fonts/pt-serif-regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/pt-serif-regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/pt-serif-bold.woff",
      weight: "700",
    },
    {
      path: "./fonts/pt-serif-bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-ptSerif",
});

export const metadata: Metadata = {
  title: "La Vie en Fleur",
  description:
    "Discover fresh, handpicked floral arrangements for every occasion. Shop beautiful bouquets, custom designs, and enjoy reliable delivery. Brighten your day with our dreamy blooms!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monggoland.variable} ${ptSerif.variable} font-serif antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
