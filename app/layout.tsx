import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Premium fontumuzu tanımlıyoruz
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Amazing Exteriors | Premium Texas Homes",
  description: "Premium windows, siding, and doors that last.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} h-full antialiased`}
    >
      <body className={`${jakarta.className} min-h-full flex flex-col bg-[#F8F9FA]`}>
        {children}
      </body>
    </html>
  );
}