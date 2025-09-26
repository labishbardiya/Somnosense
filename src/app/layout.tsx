import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SomnoSense - Sleep Bruxism Monitoring Device | Patent Pending",
  description: "SomnoSense is a wearable device that monitors sleep bruxism (jaw clenching and teeth grinding during sleep). Get clinician-ready insights from home. Pilot study in progress.",
  keywords: "sleep bruxism device, wearable teeth grinding monitor, bruxism severity report, sleep monitoring, dental health, jaw clenching",
  authors: [{ name: "SomnoSense" }],
  robots: "index, follow",
  openGraph: {
    title: "SomnoSense - Sleep Bruxism Monitoring Device",
    description: "Sleep Well. Protect Your Smile. Clinician-Ready Insights, Right From Home.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}

