export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="max-w-[90rem] mx-auto">{children}</section>;
}
