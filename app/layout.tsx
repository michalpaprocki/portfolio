import "./globals.css";
import { Abel } from "next/font/google";
import Script from "next/script";
export const metadata = {
  title: "",
  description: "",
  icons: {
    icon: './images/favicon.ico' 
  }
};
const abel = Abel({
  subsets: ["latin"],
  variable: "--abel-font",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={abel.variable}>{children}</body>
        <Script src="./scripts/theme.js" />
      </html>
    </>
  );
}
