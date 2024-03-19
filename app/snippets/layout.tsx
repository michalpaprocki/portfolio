import Path from "../components/Path";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-reduced flex-col">
      <div className="pt-20">
        <Path />
      </div>
      {children}
    </section>
  );
}
