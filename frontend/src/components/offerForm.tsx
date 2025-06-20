import { useState } from "react";
import type { FormData } from "../interfaces";
import "..//css/offerForm.css";

import svgFormGif from "../assets/svg_form.gif";

function OfferForm() {
  const [formData, setFormData] = useState<FormData>({
    EstateType: "dům",
    FullName: "",
    Phone: "",
    Email: "",
    Region: "t",
    District: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Chyba při odeslání");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (submitted) {
    return <p className="success">Děkujeme! Brzy se vám ozveme.</p>;
  }

  return (
    <div className="offer_form_wrap">
      <div className="offer_left_form_section">
        <div className="offer_form_container">
          <div className="offer_form_title">
            <h1>Ocenění Vaší nemovitosti</h1>
            <h4>Zjistěte férovou hodnotu Vaší nemovitosti.</h4>
          </div>
          <br />

          <section className="offer_form_section">
            <form onSubmit={handleSubmit} className="offer_form">
              <section>
                <label>
                  <strong>Typ</strong> nemovitosti:
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="EstateType"
                  value={formData.EstateType}
                  onChange={handleChange}
                  required
                />
              </section>

              <section>
                <label>
                  <strong>Kraj</strong> nemovitosti
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="Region"
                  value={formData.Region}
                  onChange={handleChange}
                  required
                />
              </section>

              <section>
                <label>
                  <strong>Okres</strong> nemovitosti
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="District"
                  value={formData.District}
                  onChange={handleChange}
                  required
                />
              </section>

              {formData.EstateType && formData.District && formData.Region && (
                <section>
                  {" "}
                  <section>
                    <label>
                      <strong>Jméno</strong> a <strong>příjemní</strong>
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      name="FullName"
                      type="text"
                      value={formData.FullName}
                      onChange={handleChange}
                      required
                    />
                  </section>
                  <section>
                    <label>
                      <strong>Telefonní</strong> číslo
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      name="Phone"
                      type="tel"
                      value={formData.Phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{9}"
                    />
                  </section>
                  <section>
                    <label>
                      <strong>Email</strong>{" "}
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      name="Email"
                      type="email"
                      value={formData.Email}
                      onChange={handleChange}
                      required
                    />
                  </section>
                </section>
              )}
              <button type="submit" className="offer_form_submit">
                Odeslat
              </button>
            </form>
          </section>
        </div>
      </div>

      <div className="offer_svg_container">
        {" "}
        <img src={svgFormGif} alt="svg_img" className="offer_svg" />
      </div>
    </div>
  );
}

export default OfferForm;
