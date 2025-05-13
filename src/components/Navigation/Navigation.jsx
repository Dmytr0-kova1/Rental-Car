import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
    </nav>
  );
};

export default Navigation;
