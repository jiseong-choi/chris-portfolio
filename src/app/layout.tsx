import {ReactNode} from "react";

export const metadata = {
  title: "chris-choi portfolio",
  description: "Portfolio of chris-choi",
  keywords: ["chris-choi", "portfolio", "next.js", "backend-developer"],
};

type LayoutProps = {
  children: ReactNode;

}

export default function RootLayout({ children } : LayoutProps ) {
  return (
      <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
      </html>
  );
}