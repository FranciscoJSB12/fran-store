import { ReactNode } from "react";

interface PropType {
  children: ReactNode;
}

const Layout = ({ children }: PropType) => {
  return (
    <section className="flex flex-col items-center mt-[80px] mb-20 px-5">
      {children}
    </section>
  );
};

export default Layout;
