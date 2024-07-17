import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "DrugSleuth",
  description:
    "DrugSleuth helps identify drugs prescribed to patients by asking a series of targeted questions tailored for both healthcare professionals and patients. Answer questions about patient details, symptoms, drug appearance, usage, and more to get accurate drug identification.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={metadata.description ?? ""} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#cff2fb" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="twitter:image" content="https://raw.githubusercontent.com/Llewellyn500/drugsleuth/main/public/drugsleuth-logo.webp" />
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:title" content="DrugSleuth"/>
        <meta property="twitter:description" content="Pill puzzled? Sleuth it out!"/>

        <meta property="og:image" content="https://raw.githubusercontent.com/Llewellyn500/drugsleuth/main/public/drugsleuth-logo.webp"/>
        <meta property="og:site_name" content="DrugSleuth"/>
        <meta property="og:title" content="DrugSleuth"/>
        <meta property="og:description" content="Pill puzzled? Sleuth it out!" />
        <meta property="og:url" content="https://drugsleuth.vercel.app/"/>
      </Head>
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
