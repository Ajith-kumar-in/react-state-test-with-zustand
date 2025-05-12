// app/layout.jsx
import Providers from "./providers";
export const metadata = {
  title: "My App",
  description: "…",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
