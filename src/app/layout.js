import { Inter } from "next/font/google";
import "./../styles/globals.scss";
import Container from "@/commponents/container/Container.js";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
