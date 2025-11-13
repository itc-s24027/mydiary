import './globals.css';
import Image from 'next/image';
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="ja">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
