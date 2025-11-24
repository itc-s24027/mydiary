import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "./_components/BootstrapClient";
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
          <BootstrapClient />
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
