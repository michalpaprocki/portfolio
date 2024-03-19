import { Metadata } from "next";
import Path from "../components/Path";

export const metadata: Metadata = {
  title: "Michał Paprocki",
  keywords: ["nextjs", "react", "web development", "blog"],
  description: "Personal website of Michał Paprocki - web developer.",
};

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex min-h-reduced flex-col">
      <div className="pt-20">
        <Path />
      </div>
      {children}
    </section>
  );
};

export default layout;
