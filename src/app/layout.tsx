import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import './globals.css';

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trime Selector",
  description: "A simple app to help you select the right trim for your project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
