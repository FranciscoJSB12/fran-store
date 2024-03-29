import { ReactNode } from "react";

interface PropType {
  children: ReactNode;
}

export const Layout = ({ children }: PropType) => {
  return (
    <section className="flex flex-col items-center mt-20 pb-20 xlg:ml-72 xlg:mt-10">
      {children}
    </section>
  );
};
