import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Michał Paprocki",
  keywords: ["nextjs", "react", "web development", "blog"],
  description: "Personal website of Michał Paprocki - web developer.",
};

const layout = async ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
