import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <section className="flex flex-col items-center mt-20 pb-20 xlg:ml-72 xlg:mt-10">
      {children}
    </section>
  );
};
