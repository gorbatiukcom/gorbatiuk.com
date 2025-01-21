import type { Metadata } from "next";
import { Viewport } from "next";

import { fonts } from "./fonts";
import { Providers } from "./providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Oleg Gorbatiuk",
  description: "Oleg Gorbatiuk",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fonts.inter.className}>
      <body
        style={{
          margin: 0,
          overflow: "hidden",
          height: "100svh",
        }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
