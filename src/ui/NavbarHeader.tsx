import { Bars4Icon } from "@heroicons/react/24/outline";

interface PropType {
  toggleMenu: () => void;
}

export const NavbarHeader = ({ toggleMenu }: PropType) => {
  return (
    <header className="w-full h-[60px] px-5 flex justify-between items-center fixed top-0 left-0 z-20 bg-blue-800 cursor-pointer xlg:hidden">
      <p>
        <Bars4Icon className="h-6 w-6 text-white" onClick={toggleMenu} />
      </p>
      <p className="font-semibold italic text-lg text-white">franStore</p>
    </header>
  );
};
