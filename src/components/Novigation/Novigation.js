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
          <NavLink
            to="/welcome"
            className={s.navLink}
            activeclassname={s.navLinkActive}
          >
            4. Анимация
          </NavLink>
          <NavLink
            to="/detailed"
            className={s.navLink}
            activeclassname={s.navLinkActive}
          >
            5. Detailed
          </NavLink>
          <NavLink
            to="/texture"
            className={s.navLink}
            activeclassname={s.navLinkActive}
          >
            6.Текстура
          </NavLink>
          <NavLink
            to="/text"
            className={s.navLink}
            activeclassname={s.navLinkActive}
          >
            7.Текст
          </NavLink>
          <NavLink
            to="/texthtml"
            className={s.navLink}
            activeclassname={s.navLinkActive}
          >
            8.Текст+HTML
          </NavLink>
          <NavLink
            to="/spotlight"
            className={s.navLink}
            activeclassname={s.navLinkActive}
          >
            9.Прожектор
          </NavLink>
          <NavLink
            to="/sound"
            className={s.navLink}
            activeclassname={s.navLinkActive}
          >
            10.Звук
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
