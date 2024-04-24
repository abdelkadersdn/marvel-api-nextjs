import "./globals.css";

export const metadata = {
  title: "Marvel API NEXT.js",
  description: "Created by Abdelkader Soudani for Free2move",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
