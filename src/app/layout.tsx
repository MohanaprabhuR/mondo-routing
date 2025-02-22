import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/header";
import Footer from "@/app/footer";
import { TanstackProvider } from "@/app/provider/tanstackProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-[rgba(0,0,0,0.9)]">
        <TanstackProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
