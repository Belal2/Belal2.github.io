import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const title = "Belal Abdalhuk — Full-Stack Product & Platform Engineer";
const description = "Senior Full-Stack Engineer building enterprise products across interfaces, APIs, integrations, real-time data and AI in Egypt, Saudi Arabia and remote teams.";

export const metadata: Metadata = {
  metadataBase: new URL("https://belal2.github.io"),
  title,
  description,
  keywords: ["Full-Stack Engineer", "Java", "Spring Boot", "Angular", "Enterprise Software", "System Integration", "Product Engineering"],
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://belal2.github.io/",
    images: [{ url: "/og-portfolio-v2.png", width: 1731, height: 909, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-portfolio-v2.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${plexMono.variable}`}>{children}</body>
    </html>
  );
}
