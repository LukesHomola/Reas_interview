import { useState } from "react";

import "../css/home.css";
import "../css/colors.css";

function Home() {
  return (
    <>
      <div className="app_container">
        <div className="app_title_container">
          <h1>Reas interview projekt</h1>
          <h3>
            Vypracoval - <strong>Homola Lukáš</strong>
          </h3>
        </div>

        <div className="app_todo_card_container">
          <h4>Zadání úkolu</h4>
          <section className="app_todo_card_grid_container">
            <div className="app_todo_card">
              <h3>FrontEnd</h3>
              <ul>
                <li>
                  <strong>Zobrazit dvoukrokový formulář</strong> <br />→ pro
                  sběr leadů → sběr údajů o nemovitosti a kontaktních údajů
                </li>
                <li>
                  <strong>
                    Validace formuláře (např. email, povinná pole)
                  </strong>{" "}
                  <br />→ ideálně pomocí knihovny (např. Zod nebo Yup)
                </li>
                <li>
                  <strong>Zaslat data na backend přes API</strong> <br />→
                  metoda POST na příslušný endpoint
                </li>{" "}
                <li>
                  <strong>Zobrazit potvrzení o úspěšném odeslání</strong> <br />
                  → jednoduchá děkovací stránka nebo message
                </li>{" "}
                <li>
                  <strong>Volitelně: Dockerizace</strong> <br />→ Setup docker.
                </li>
              </ul>
            </div>
            <div className="app_todo_card">
              <h3>BackEnd</h3>
              <ul>
                <li>
                  <strong>Vytvořit REST API (např. Koa nebo Express)</strong>{" "}
                  <br />→ endpoint <code>POST /api/leads</code>
                </li>
                <li>
                  <strong>Zpracovat příchozí JSON data</strong> <br />→ přijmout
                  data z formuláře ve správném formátu
                </li>
                <li>
                  <strong>Validace vstupních dat</strong> <br />→ např. pomocí
                  Zod nebo Joi na backendu
                </li>
                <li>
                  <strong>Uložit data do MongoDB</strong> <br />→ kolekce{" "}
                  <code>leads</code> nebo podobná
                </li>
                <li>
                  <strong>Vrátit odpověď klientovi</strong> <br />→ např.{" "}
                  <code>201 Created</code> nebo chybovou zprávu
                </li>
                <li>
                  <strong>Volitelně: Dockerizace</strong> <br />→ Dockerfile +
                  návod v README
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
