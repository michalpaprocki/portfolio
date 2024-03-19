import Path from "../components/Path";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-reduced">
      <div className="flex  pt-20">
        <Path />
      </div>
      {children}
    </section>
  );
}
