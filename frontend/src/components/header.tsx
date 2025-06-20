import { useState } from "react";

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
              <a href="/" className="nav_active">
                Domů
              </a>
              <a href="/chci-nabidku">Získat nabídku</a>
              <a href="/" className="nav_placeholder">
                Kupuji
              </a>
              <a href="/" className="nav_placeholder">
                Ceny nemovitostí
              </a>
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
