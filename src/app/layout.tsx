import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { AntdProvider } from "@/components/providers/antd-provider";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "管理パネル - 塾講師コネクト",
  description: "塾講師コネクト管理パネル",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex bg-background text-foreground">
        <AntdProvider>
          {children}
        </AntdProvider>
      </body>
    </html>
  );
}
