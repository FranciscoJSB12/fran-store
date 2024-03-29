import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface PropType {
  children: ReactNode;
  href: string;
  clickHandler?: () => void;
}

const activeStyle = " text-white bg-blue-600 px-24 py-2 rounded-lg";

const inActiveStyle = "text-gray-700 xlg:text-white block";

export const NavItem = ({ children, href, clickHandler }: PropType) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive ? inActiveStyle + activeStyle : inActiveStyle
      }
      onClick={clickHandler}
    >
      {children}
    </NavLink>
  );
};
