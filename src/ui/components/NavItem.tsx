import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface PropType {
  children: ReactNode;
  href: string;
  clickHandler: () => void;
}

const activeStyle = "underline underline-offset-4";

export const NavItem = ({ children, href, clickHandler }: PropType) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => (isActive ? activeStyle : "")}
      onClick={clickHandler}
    >
      {children}
    </NavLink>
  );
};
