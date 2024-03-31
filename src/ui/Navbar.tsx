import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch, setCategory } from "../store";
import { NavbarHeader } from "./NavbarHeader";
import { NavItem } from "./NavItem";
import { TransparentBackground } from "./TransparentBackground";
import { categories } from "../utils/navbarCategories";
import { renderNavbarCategories } from "../utils/renderNavbarCategories";
import { setLastCategory } from "../utils/setLastCategory";

export const Navbar = () => {
  const category = useAppSelector((state) => state.category.currentCategory);
  const dispatch = useAppDispatch();
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleMenu = (): void => {
    setIsNavbarActive((prev) => !prev);
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
    dispatch(setCategory(selectedCategory));
    setIsNavbarActive(false);
    scrollToPageTop();
  };

  useEffect(() => {
    setLastCategory("lastCategory", category);
  }, [category]);

  return (
    <>
      <NavbarHeader toggleMenu={toggleMenu} />
      <nav
        className={`w-full max-w-sm ${
          isNavbarActive ? "h-[calc(100vh-60px)]" : "hidden"
        } pt-5 flex flex-col fixed top-[60px] left-0 z-20 overflow-y-scroll bg-white xlg:z-10 xlg:flex xlg:bg-blue-800 xlg:h-screen xlg:top-0 xlg:w-72 xlg:overflow-y-hidden`}
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
            <NavItem href="/my-order">My order</NavItem>
          </li>
        </ul>
      </nav>
      {isNavbarActive && <TransparentBackground hiddenAfterStreching={true} />}
    </>
  );
};
