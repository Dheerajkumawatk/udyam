import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// NOTE: this build environment can't reach fonts.googleapis.com, so the
// type system below uses a system-font stack tuned to sit close to
// Fraunces / Inter / IBM Plex Mono. Once you deploy somewhere with normal
// internet access, swap this block for:
//
//   import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
//   const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], axes: ["opsz","SOFT","WONK"] });
//   const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
//   const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400","500","600"] });
//
// and add `${fraunces.variable} ${inter.variable} ${plexMono.variable}` to
// the body className below.

export const metadata: Metadata = {
  title: "Udyam Bazaar | Buy, Sell & Fund Businesses Across India",
  description:
    "India's marketplace to buy and sell established businesses, raise funds, and match your startup with the right government and private grants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
