import { NavLink } from "react-router-dom";
import "../css/header.css";

function Header() {
  return (
    <header>
      <div className="header_container">
        <details>
          <summary>☰ </summary>
          <div className="header_flex">
            <section>
              <h3>Reas</h3>
              <p className="font-caption">interview projekt</p>
            </section>

            <nav className="nav">
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

            <section>
              <p>Lukáš homola</p>
            </section>
          </div>
        </details>
      </div>

      <div className="header_container_desktop">
        <div className="header_container_left_desktop">
          <section>
            <h3>Reas</h3>
            <p className="font-caption">interview projekt</p>
          </section>
          <nav className="desktop_nav">
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
  );
}

export default Header;
