import { NavLink } from "react-router-dom";
import clsx from "clsx";

import s from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const Navigation = () => {
  return (
    <nav>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
