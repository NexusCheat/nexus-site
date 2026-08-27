import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://nexus-site.vercel.app";

export const metadata: Metadata = {
  title: "Nexus Cheat | CS2 External ESP & Aimbot",
  description:
    "Advanced CS2 external cheat with ESP, aimbot, glow, skin changer, radar hack and more. Secure, fast and constantly updated.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Nexus Cheat | CS2 External ESP & Aimbot",
    description:
      "Advanced CS2 external cheat with ESP, aimbot, glow, skin changer, radar hack and more. Secure, fast and constantly updated.",
    url: SITE_URL,
    siteName: "Nexus Cheat",
    images: [
      {
        url: "/og.png",
        width: 512,
        height: 512,
        alt: "Nexus Cheat",
        type: "image/png",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Cheat | CS2 External ESP & Aimbot",
    description:
      "Advanced CS2 external cheat with ESP, aimbot, glow, skin changer, radar hack and more.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/nexuslogo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body className="bg-[#0a0a0f] text-gray-100 antialiased">{children}</body>
    </html>
  );
}
