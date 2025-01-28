import type { Metadata, Viewport } from "next";
import { Lato, Lilita_One } from "next/font/google";
import "./globals.css";

const latoSans = Lato({
  weight: ["400", "700"],
  variable: "--font-lato",
  subsets: ["latin"],
});

const lilitaOneSans = Lilita_One({
  variable: "--font-lilita-one",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "Taomus",
  title: {
    default: "Taomus",
    template: "%s - Taomus",
  },
  description: "Consultora de Vendas Sara - Big Passo Calçados SBS",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Taomus",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    title: "Sara - Big Passo",
    siteName: "Cartão de Visita - Consultora Sara",
    url: "https://bigpasso.sbs",
    images: ["https://bigpasso.sbs/icons/apple-touch-icon.png"],
  },
  keywords: ["nextjs", "next15", "pwa", "next-pwa"],
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fffdf6" }],
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${latoSans.variable} ${lilitaOneSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
