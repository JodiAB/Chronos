import Navbar from "@/components/Navbar";
import "./globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-gray-950 to-black text-white min-h-screen">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
