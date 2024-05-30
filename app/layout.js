import { Inter } from "next/font/google";
// import "./globals.css";
import "../styles/globals.css";
import Head from 'next/head';


const inter = Inter({
   subsets: ["latin"],
   variable: '--font-inter',
  });

export const metadata = {
  title: "AccioJob",
  description: "AccioJob Website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="favicon" href="favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className} bodysize`}>{children}</body>
    </html>
  );
}
