import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexus Cheat | CS2 External ESP & Aimbot",
  description: "Advanced CS2 external cheat with ESP, aimbot, glow, skin changer and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-[#0a0a0f] text-gray-100 antialiased">{children}</body>
    </html>
  );
}
