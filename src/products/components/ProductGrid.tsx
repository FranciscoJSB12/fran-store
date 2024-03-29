import type { ReactNode } from "react";

interface PropType {
  children: ReactNode;
}

export const ProductGrid = ({ children }: PropType) => {
  return (
    <section className="w-full pt-5 grid grid-cols-1 justify-items-center gap-y-14 md:grid-cols-2 md:max-w-[636px] lg:grid-cols-3 lg:max-w-[944px]">
      {children}
    </section>
  );
};
