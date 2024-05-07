import "../globals.css";
export const metadata = {
  title: "Log In",
  description: "Log In Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
