import "../global.css";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { Space_Grotesk } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: "Suraj Kumar Ojha",
    template: "%s | surajkumarojha.com.np",
  },
  description: "Software engineer at LIS Nepal Pvt. Ltd.",
  openGraph: {
    title: "surajkumarojha.com.np",
    description: "Software engineer at LIS Nepal Pvt. Ltd.",
    url: "https://surajkumarojha.com.np",
    siteName: "surajkumarojha.com.np",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const space = Space_Grotesk({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={space.className}>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
