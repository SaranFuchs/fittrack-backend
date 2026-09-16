import "./globals.css";

export const metadata = {
  title: "FitTrack Coach API",
  description: "API service for FitTrack Coach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
