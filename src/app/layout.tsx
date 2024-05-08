import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Case Cobra",
  description: "Capture your favourite memories on your phone.",
};

export default function RootLayout({
  children,
  authModal,
}: Readonly<{
  children: React.ReactNode;
  authModal: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NavBar />
        {authModal}
        <div className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <main className="flex-1 flex flex-col h-full w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
