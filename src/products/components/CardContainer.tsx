import type { ReactNode } from "react";

interface PropType {
  children: ReactNode;
}

const CardContainer = ({ children }: PropType) => {
  return (
    <section className="w-full max-w-screen-lg pt-5 grid grid-cols-1 gap-5">
      {children}
    </section>
  );
};

export default CardContainer;
