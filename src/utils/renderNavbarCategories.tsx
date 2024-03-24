import { categories } from "./navbarCategories";
import { NavItem } from "../ui/components/NavItem";

type clickHandlerType = (item: string) => void;

export const renderNavbarCategories = (clickHandler: clickHandlerType) => {
  const categoryItems = Object.values(categories);
  categoryItems.splice(0, 1);
  return categoryItems.map((category) => (
    <li key={category}>
      <NavItem
        href={category.toLowerCase()}
        clickHandler={() => clickHandler(category.toLowerCase())}
      >
        {category}
      </NavItem>
    </li>
  ));
};
