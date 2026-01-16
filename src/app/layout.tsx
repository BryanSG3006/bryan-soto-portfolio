import "./globals.css";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackTop";


export const metadata = {
  title: "Bryan Soto García | Full Stack Developer",
  description: "Ingeniero de Software Full Stack especializado en React, Angular y TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="dark-animated-bg text-gray-100">
  <Navbar />
  <main className="max-w-6xl mx-auto px-6 pt-20">
  {children}
</main>

  <BackToTop />
</body>

    </html>
  );
}
