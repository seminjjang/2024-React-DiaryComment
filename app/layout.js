import "./globals.css";

export const metadata = {
  title: "Diary Comment",
  description: "Generated by SM Park",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
