import { NavLink } from "react-router-dom";

import "../css/Header.css";

function Header() {
  return (
    <>
      <header>
        <div className="header_container">
          <div className="header_container_left">
            <section>
              <h3>Reas</h3>
              <p className="font-caption">interview projekt</p>
            </section>
            <nav>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav_active" : "")}
                end
              >
                Domů
              </NavLink>
              <NavLink
                to="/chci-nabidku"
                className={({ isActive }) => (isActive ? "nav_active" : "")}
              >
                Získat nabídku
              </NavLink>
              <NavLink to="/" className="nav_placeholder">
                Kupuji
              </NavLink>
              <NavLink to="/" className="nav_placeholder">
                Ceny nemovitostí
              </NavLink>
            </nav>
          </div>
          <section>
            <p>Lukáš homola</p>
          </section>
        </div>
      </header>
    </>
  );
}

export default Header;
