import "./globals.css";
import { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/static/Footer";
export const metadata: Metadata = {
  title: "Michał Paprocki",
  keywords: ["nextjs", "react", "web development", "blog"],
  description: "Personal website of Michał Paprocki - web developer.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script src="/scripts/theme.js" />
        </head>
        <body className="bg-light-color text-dark-color dark:bg-dark-color dark:text-light-color">
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
