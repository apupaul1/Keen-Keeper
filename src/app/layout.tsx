import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/shared/Navbar";
import Footer from "@/Components/shared/Footer";
import FriendProvider from "@/context/FriendContext";
import { Toaster } from "react-hot-toast";

const dosis = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keen Keeper",
  description: "A Social Platform for Connecting People",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${dosis.className} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC]">
        <FriendProvider>
          <Navbar></Navbar>
          <main>{children}</main>
          <Footer></Footer>

          <Toaster position="top-center" reverseOrder={false} />
        </FriendProvider>
      </body>
    </html>
  );
}
