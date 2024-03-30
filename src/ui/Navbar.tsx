import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars4Icon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../Context/ShoppingCartProvider";
import { NavItem } from "./NavItem";
import { TransparentBackground } from "./TransparentBackground";
import { categories } from "../utils/navbarCategories";
import { renderNavbarCategories } from "../utils/renderNavbarCategories";

export const Navbar = () => {
  const { setCategory } = useContext(ShoppingCartContext);

  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuActive((prev) => !prev);
  };

  const scrollToPageTop = (): void => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  const saveLastCategory = (category: string): void => {
    const selectedCategory = category.toLowerCase();
    setCategory(selectedCategory);
    localStorage.setItem("lastCategory", selectedCategory);
    setIsMenuActive(false);
    scrollToPageTop();
  };

  return (
    <>
      <header className="w-full h-[60px] px-5 flex justify-between items-center fixed top-0 left-0 z-20 bg-blue-800 cursor-pointer xlg:hidden">
        <p>
          <Bars4Icon className="h-6 w-6 text-white" onClick={toggleMenu} />
        </p>
        <p className="font-semibold italic text-lg text-white">franStore</p>
      </header>
      <nav
        className={`w-full max-w-sm ${
          isMenuActive ? "h-[calc(100vh-60px)]" : "hidden"
        } pt-5 flex flex-col fixed top-[60px] left-0 z-20 overflow-y-scroll bg-white xlg:flex xlg:bg-blue-800 xlg:h-screen xlg:top-0 xlg:w-72 xlg:overflow-y-hidden`}
      >
        <ul className="flex flex-col items-center gap-6 pb-5">
          <li className="hidden xlg:block">
            <NavLink
              to="/home"
              className="font-semibold italic text-lg text-gray-700 xlg:text-white"
              onClick={() => saveLastCategory(categories.all)}
            >
              franStore
            </NavLink>
          </li>
          <li>
            <NavItem
              href="/home"
              clickHandler={() => saveLastCategory(categories.all)}
            >
              {categories.all}
            </NavItem>
          </li>
          {renderNavbarCategories(saveLastCategory)}
        </ul>
        <hr className="w-64 mx-auto border-0 border-b border-b-gray-400 xlg:border-b-white border-dashed" />
        <ul className="flex flex-col items-center gap-6 py-5">
          <li>
            <NavItem href="/my-account">My account</NavItem>
          </li>
          <li>
            <NavItem href="/orders">My orders</NavItem>
          </li>
          <li>
            <NavItem href="/">Sign out</NavItem>
          </li>
        </ul>
      </nav>
      {isMenuActive && <TransparentBackground />}
    </>
  );
};
