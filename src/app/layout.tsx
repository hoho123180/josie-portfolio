import "../css/reset.css";

import { figTree } from "@/fonts/fonts";
import type { Metadata } from "next";
import "../css/global.css";

// https://docs.fontawesome.com/web/use-with/react/use-with#getting-font-awesome-css-to-work
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figTree.className}>
        {children}
      </body>
    </html>
  );
}
