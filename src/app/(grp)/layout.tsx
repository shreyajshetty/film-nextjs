import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../globals.css";
import Header from "./header/page";
import Footer from "./footer/page";
import { SearchContextProvider } from "@/components/search";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Film Now",
  description: "FilmNow App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SearchContextProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
          <ToastContainer position="bottom-center" />
        </body>
      </html>
    </SearchContextProvider>
  );
}
