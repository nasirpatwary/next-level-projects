import localFont from "next/font/local";
import "./globals.css";
import NavbarPage from "@/components/Navbar";
import {Inter} from "next/font/google"
const inter = Inter({subsets:['latin']})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
      default: "Next Hero",
      template: "%s | Next Hero " 
  },
  description: "Super Powrful Next Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`container mx-auto ${inter.className}`}>
         <NavbarPage />
        {children}
        <footer className="bg-sky-500 text-center text-white p-5">
            This is footer section
        </footer>
      </body>
    </html>
  );
}
