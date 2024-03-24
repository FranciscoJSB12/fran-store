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
      <header className="w-full h-[60px] px-5 flex items-center fixed top-0 left-0 z-10 bg-blue-600">
        <p>
          <Bars4Icon className="h-6 w-6 text-white" onClick={toggleMenu} />
        </p>
      </header>
      <nav
        className={`w-full ${
          isMenuActive ? "h-[calc(100vh-60px)]" : "hidden"
        } pt-5 flex flex-col fixed top-[60px] left-0 z-10 bg-white`}
      >
        <ul className="flex flex-col items-center gap-6 pb-5">
          <li>
            <NavLink
              to="/home"
              className="font-semibold text-lg text-gray-700"
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
        <ul className="flex flex-col items-center gap-6 pb-5">
          <li></li>
        </ul>
      </nav>
      <aside
        className="w-14 h-14 rounded-full fixed right-5 bottom-5 bg-blue-600 z-10 flex justify-center items-center cursor-pointer"
        onClick={() => setIsCheckoutSideMenuOpen((current) => !current)}
      >
        <ShoppingBagIcon className="h-6 w-6 text-white" />
        <span className="text-white">{shoppingCart.length}</span>
      </aside>
    </>
  );
};

export default Navbar;
