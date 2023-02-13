import { NavLink } from "react-router-dom";

import s from "./Novigation.module.css";

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <div className={s.navBox}>
        <div>
          <NavLink
            to="/"
            className={s.navLink}
            activeclassname={s.navLinkActive}
          >
            1. Основа
          </NavLink>
          <NavLink
            to="/physics"
            className={s.navLink}
            activeclassname={s.navLinkActive}
          >
            2. Физика
          </NavLink>
          <NavLink
            to="/ferarri"
            className={s.navLink}
            activeclassname={s.navLinkActive}
          >
            3. 3D модель
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
