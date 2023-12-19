import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TanstackProvider } from "@/lib/tanstack/Provider";
import { Toolbar } from "@/components/navigation/Toolbar";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/utils/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  icons: {
    icon: "/favicon.ico",
  
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + "flex flex-col gap-2"}>
        <TanstackProvider>
          <Toolbar />
          {children}
          <footer className="w-full flex items-center justify-center py-3 gap-2">
            <FaFacebookF className="h-5 w-5" />
            <FaWhatsapp className="h-5 w-5" />
            <FaInstagram className="h-5 w-5" />
            <FaXTwitter className="h-5 w-5" />
            <Mail className="h-5 w-5" />
            <Phone className="h-5 w-5" />
          </footer>
        </TanstackProvider>
      </body>
    </html>
  );
}
