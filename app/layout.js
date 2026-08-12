export const metadata = {
  title: "Ridgeline Trail Co.",
  description: "Small-batch hiking gear for weekend backpackers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
