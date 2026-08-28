import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.obenewa.co.uk"),
  title: "Obenewa Adu | Creative, Commercial and Technical Operator",
  icons: { icon: "/favicon.svg" },
  description: "Campaign strategy, creator partnerships, paid media, research, product development and AI-enabled systems.",
  openGraph: {
    title: "Build the product. Grow the brand. | Obenewa Adu",
    description: "Creative, commercial and technical leadership across campaigns, media, products and systems.",
    url: "https://www.obenewa.co.uk/",
    images: ["https://www.obenewa.co.uk/og.png"],
  },
  twitter: {
    card: "summary",
    title: "Build the product. Grow the brand. | Obenewa Adu",
    description: "Creative, commercial and technical leadership across campaigns, media, products and systems.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
