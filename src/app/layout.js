/**
 * Portfolio
 * Copyright (C) 2025 Maxim (https://github.com/maximjsx/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */
import localFont from "next/font/local";
import { Press_Start_2P } from "next/font/google";
import Navbar from "@/components/custom/navbar";
import "@/app/styles/globals.css";
import "@/app/styles/card.css";
import "@/app/styles/blurred-img.css";
import config from "/CONFIG.json";
import Script from "next/script";

import CustomCursor from "@/components/custom/cursor";
import Footer from "@/components/custom/footer";
import Background from "@/components/custom/background";
import { Spotlight } from "@/components/ui/spotlight-new";

const deliusFont = localFont({
  src: "./fonts/DeliusSwashCaps-Regular.ttf",
  variable: "--font-custom",
  weight: "100 900",
});

const robotoFont = localFont({
  src: "./fonts/Roboto-Medium.ttf",
  variable: "--font-custom",
  weight: "100 900",
});

const audiowideFont = localFont({
  src: "./fonts/Audiowide-Regular.ttf",
  variable: "--font-custom",
  weight: "100 900",
});

const minecraftFont = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-custom",
});

// Comic Sans MS is added as a system font
const comicSansFont = {
  variable: "--font-custom",
  style: { fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }
};

const fonts = {
  delius: deliusFont,
  roboto: robotoFont,
  audiowide: audiowideFont,
  minecraft: minecraftFont,
  comicsans: comicSansFont,
};

export const metadata = {
  title: config.siteMetadata.title,
  description: config.siteMetadata.description,
  openGraph: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    images: [{ url: config.siteMetadata.embeds?.image }],
  },
  twitter: {
    card: config.siteMetadata.embeds?.twitter_card || "summary_large_image",
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    images: [config.siteMetadata.embeds?.image],
  },
  other: {
    "theme-color": config.siteMetadata.embeds?.color || "#ce6419",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: { url: '/favicon/apple-touch-icon.png' },
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  const selectedFont = fonts[config.global.font] || comicSansFont;
  const isMinecraftFont = config.global.font === 'minecraft';
  const isComicSansFont = config.global.font === 'comicsans';

  // Set inline style for Comic Sans since it uses system font
  const inlineStyle = isComicSansFont ? selectedFont.style : {};

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#9c27b0" />
        <meta name="msapplication-TileColor" content="#9c27b0" />
        <link rel="preload" href="/scripts/dark-mode.js" as="script" />
        <script src="/scripts/dark-mode.js"></script>
      </head>
      <body
        className={`${!isComicSansFont ? selectedFont.variable : ''} ${isMinecraftFont ? 'minecraft-font' : ''} ${isComicSansFont ? 'comic-sans-font' : ''} min-h-screen antialiased flex flex-col overflow-x-hidden`}
        style={inlineStyle}
      >
        <link rel="preconnect" href="https://img.shields.io"></link>
        <Background />
        
        {/* Kawaii Decorative Elements */}
        <div className="kawaii-element star-1">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#E1BEE7" stroke="#9C27B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="kawaii-element star-2">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFB7C5" stroke="#F06292" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="kawaii-element star-3">
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#E1BEE7" stroke="#9C27B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="kawaii-element heart">
          <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="#FF80AB" stroke="#F06292" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div className="h-[60rem] w-full absolute overflow-hidden z-[-1] top-0 left-0 right-0 mt-0 pointer-events-none">
          <Spotlight />
        </div>
        {config.global.custom_cursor.enabled && <CustomCursor />}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer config={config} />
        <Script src="scripts/hover.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}