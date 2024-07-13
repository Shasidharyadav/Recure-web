import "./globals.css";

// import Header from "./markup/layout/header";
// import Footer from "./markup/layout/footer";

export const metadata = {
  title: "Recure",
  description:
    "Revitalize Your Spirit,Restore Your Body Begin Your Recure Journey Today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/logo.png" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>{children}</body>
    </html>
  );
}
