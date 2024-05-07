import "../globals.css";
export const metadata = {
  title: "Sign Up",
  description: "Sign Up Page",
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
