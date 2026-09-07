import "./globals.css";

export const metadata = {
  title: "Highlands YSWS!",
  description:
    "Highlands is a mountain themed You Ship We Ship where you code or do hardware, climb digital mountains and earn prizes such as hiking gear, earphones, 3d printers, and more + a chance to get invited to an IRL hackathon in Armenia",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
