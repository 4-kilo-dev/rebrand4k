import "../client/src/index.css";

export const metadata = {
  title: "4Kilo Dev — Product engineering for what’s next",
  description: "Product engineering, automation, and software systems for ambitious teams.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
