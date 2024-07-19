import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "DrugSleuth",
  description:
    "DrugSleuth helps identify drugs prescribed to patients by asking a series of targeted questions. Answer questions about patient details, symptoms, drug appearance, usage, and more to get accurate drug identification. and futher information on the drug",
    generator: 'Next.js',
    keywords: ['health', 'drugs', 'identification', 'medication', 'prescription', 'pharmacy', 'pill', 'tablet', 'capsule', 'drug', 'sleuth', 'sleuthing', 'sleuths', 'sleuthed', 'drugsleuth', 'patients', 'symptoms', 'appearance', 'usage', 'information', 'drug identification', 'drug information', 'drug sleuth', 'drug sleuthing', 'drug sleuths'],
    creator: 'Llewellyn Adonteng Paintsil',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: 'DrugSleuth',
      description: 'DrugSleuth helps identify drugs prescribed to patients by asking a series of targeted questions. Answer questions about patient details, symptoms, drug appearance, usage, and more to get accurate drug identification. and futher information on the drug',
      url: 'https://drugsleuth.vercel.app/',
      siteName: 'DrugSleuth',
      images: [
        {
          url: 'https://raw.githubusercontent.com/Llewellyn500/drugsleuth/main/public/images/social.png'
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    icons: {
      icon: '/favicon-32x32.png',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    },
    manifest: '/site.webmanifest',
    twitter: {
      card: 'summary_large_image',
      title: 'DrugSleuth',
      description: 'DrugSleuth helps identify drugs prescribed to patients by asking a series of targeted questions. Answer questions about patient details, symptoms, drug appearance, usage, and more to get accurate drug identification. and futher information on the drug',
      creator: '@llewellynAdont1',
      images: ['https://raw.githubusercontent.com/Llewellyn500/drugsleuth/main/public/images/social.png'],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
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
      </Head>
      <body className={poppins.className}>
        <Navbar />
        {children}

        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-BD7WNBNWG8`}
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BD7WNBNWG8');
        `}
        </Script>
      </body>
    </html>
  );
}
