export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#c8dee1", margin: 0 }}>{children}</body>
    </html>
  );
}
