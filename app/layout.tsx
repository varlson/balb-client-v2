import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/partials/Navbar";
import Footer from "@/components/partials/Footer";
import { AppWrapper } from "@/context/Page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Balburdia - Caixinha",
  description:
    "App para controle e acompanhamento da caixinha da republica balburdia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} m-0`}>
        <AppWrapper>
          <Navbar />
          <div className="md:w-10/12 m-auto">
            <main className="main">{children}</main>
          </div>
          <Footer />
        </AppWrapper>
      </body>
    </html>
  );
}
