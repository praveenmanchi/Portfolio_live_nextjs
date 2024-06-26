import { DM_Sans, Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import Preloader from "@/layout/Preloader";
import "@css/animate.min.css";
import "@css/bootstrap.min.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/nice-select.min.css";
import "@css/slick.min.css";
import "@css/style.css";
import "./globals.css";
import Head from "next/head";
import { CSPostHogProvider } from './providers';

/** google fonts */
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});
const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-dm_sans",
  display: "swap",
});

/** Font family */
const fontFamily = `${inter.variable} ${dm_sans.variable} `;

export const metadata = {
  title: {
    template:
      "Praveen Manchi | %s",
    // default:
    //   "Praveen Manchi -|| Home", // a default is required when creating a template
  },
  description: "Praveen's Portfolio - Explore the creative works and projects in UX/UI design, web development, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontFamily} scroll-smooth`}>
      <body>
        <Preloader />
        <Head>
          <link rel="shortcut icon" href="/assets/images/favicon.ico" />
        </Head>
        <CSPostHogProvider>
          {children}
        </CSPostHogProvider>
        <Analytics />
      </body>
    </html>
  );
}
