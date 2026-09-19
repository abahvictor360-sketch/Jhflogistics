import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jhflogistics.vercel.app"),
  title: {
    default: "Jhflogistics — Cargo & Freight Transport Services",
    template: "%s | Jhflogistics",
  },
  description:
    "Jhflogistics moves ocean, air and land freight for importers and manufacturers — customs clearance, warehousing and door-to-door delivery on one tracked booking.",
  openGraph: {
    title: "Jhflogistics — Cargo & Freight Transport Services",
    description:
      "Ocean, air and land freight with customs clearance, warehousing and live milestone tracking.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
