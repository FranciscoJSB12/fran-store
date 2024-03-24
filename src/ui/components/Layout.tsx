import { ReactNode } from "react";

interface PropType {
  children: ReactNode;
}

const Layout = ({ children }: PropType) => {
  return (
    <section className="flex flex-col items-center mt-20 pt-10 pb-20">
      {children}
    </section>
  );
};

export default Layout;
