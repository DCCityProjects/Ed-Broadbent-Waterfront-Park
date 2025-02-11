import { PT_Sans } from "next/font/google";
import "./globals.css";

const ptSans = PT_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "Ed Broadbent Park Pocket Guide",
  description: "placeholder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ptSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
