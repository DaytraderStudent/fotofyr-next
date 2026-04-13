import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fotofyr — Fotograf i Norge",
    template: "%s | Fotofyr",
  },
  description:
    "Profesjonell fotograf spesialisert i bryllup, portrett, natur og eventfotografering. Tidløse bilder som forteller din historie.",
  keywords: [
    "fotograf",
    "bryllupsfotograf",
    "portrettfotograf",
    "naturfotograf",
    "norge",
    "fotofyr",
  ],
  openGraph: {
    title: "Fotofyr — Fotograf i Norge",
    description:
      "Tidløse bilder som forteller din historie. Bryllup, portrett, natur og event.",
    type: "website",
    locale: "nb_NO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="grain-overlay min-h-full flex flex-col">
        <Navigation />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
