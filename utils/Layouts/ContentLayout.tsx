export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="max-w-[70rem] mx-auto">{children}</section>;
}
