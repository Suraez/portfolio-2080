import "../global.css";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Suraj Kumar Ojha",
    template: "%s | surajkumarojha.com.np",
  },
  description: "Software engineer at LIS Nepal Pvt. Ltd.",
  openGraph: {
    title: "surajkumarojha.com.np",
    description: "Software engineer at upstash.com and founder of planetfall.io",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
