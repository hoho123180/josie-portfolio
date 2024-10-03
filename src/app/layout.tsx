import "../css/reset.css";

// https://docs.fontawesome.com/web/use-with/react/use-with#getting-font-awesome-css-to-work
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { figTree } from "@/fonts/fonts";
import { Providers } from "@/providers/Providers";
import type { Metadata } from "next";
import "../css/global.css";
import BG from "@/components/BG/BG";



export const metadata: Metadata = {
  title: "Josie Chen",
  description: "I'm Josie Chen - focusing on creating intuitive, impactful designs. Senior product designer with 5 years work experience, expertise in managing complex B2C and B2B projects from concept to launch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figTree.className}>
        <Providers>
          <Header />
          <BG />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
