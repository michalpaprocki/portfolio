import "./globals.css";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Michał Paprocki | Web Developer",
  icons: {
    icon: "./images/icon.ico",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>{children}</body>
        <Script src="./scripts/theme.js" />
      </html>
    </>
  );
}
