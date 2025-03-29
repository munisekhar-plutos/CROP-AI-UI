import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plutose One",
  description: "An awesome Plutose One application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Plutose One</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2025 Plutose One. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
