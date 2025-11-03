import "./globals.css";

export const metadata = {
  title: "CIO/CISO Roadmap",
  description: "Interactive career roadmap for David E. Perez Jr.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
