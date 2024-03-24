import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon, Bars4Icon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import { NavItem } from "./NavItem";
import { categories } from "../../utils/navbarCategories";
import { renderNavbarCategories } from "../../utils/renderNavbarCategories";

const Navbar = () => {
  const { shoppingCart, setCategory, setIsCheckoutSideMenuOpen } =
    useContext(ShoppingCartContext);

  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuActive((prev) => !prev);
  };

  const saveLastCategory = (category: string): void => {
    const selectedCategory = category.toLowerCase();
    setCategory(selectedCategory);
    localStorage.setItem("lastCategory", selectedCategory);
    toggleMenu();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  return (
    <>
      <nav
        className={`w-full ${
          isMenuActive && "h-screen"
        } flex flex-col fixed top-0 left-0 z-10 bg-white border-b border-b-black`}
      >
        <ul className="p-5">
          <li>
            <Bars4Icon className="h-8 w-8 text-black" onClick={toggleMenu} />
          </li>
        </ul>
        <ul
          className={`flex flex-col items-center gap-6 pb-5 ${
            !isMenuActive && "hidden"
          }`}
        >
          <li>
            <NavLink
              to="/home"
              className="font-semibold text-lg"
              onClick={() => saveLastCategory(categories.all)}
            >
              Shopi
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
        <ul
          className={`flex flex-col items-center gap-6 pb-5 ${
            !isMenuActive && "hidden"
          }`}
        >
          <li></li>
        </ul>
      </nav>
      <aside
        className="w-14 h-14 border border-black rounded-full fixed right-5 bottom-5 bg-white z-10 flex justify-center items-center cursor-pointer"
        onClick={() => setIsCheckoutSideMenuOpen((current) => !current)}
      >
        <ShoppingBagIcon className="h-6 w-6 text-black" />
        <span>{shoppingCart.length}</span>
      </aside>
    </>
  );
};

export default Navbar;
