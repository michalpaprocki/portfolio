import "./globals.css";
import Script from "next/script";
import { Metadata } from "next";
import Header from "./components/dynamic/Header";
import Footer from "./components/static/Footer";

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
        <body>
          <Script src="./scripts/theme.js" />
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
