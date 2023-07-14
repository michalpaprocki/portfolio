import "./globals.css";
import Script from "next/script";
export const metadata = {

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
