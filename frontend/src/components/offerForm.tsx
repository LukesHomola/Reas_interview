import { useState } from "react";
import type { FormData } from "../interfaces";
import "../css/offerForm.css";
import Select from "react-select";

import svgFormGif from "../assets/svg_form.gif";

const estateTypeOptions = [
  { value: "Byt", label: "Byt" },
  { value: "Rodinný dům", label: "Rodinný dům" },
  { value: "Chata", label: "Chata" },
  { value: "Pozemek", label: "Pozemek" },
];

const regionOptions = [
  { value: "Praha", label: "Praha" },
  { value: "Středočeský", label: "Středočeský" },
  { value: "Jihomoravský", label: "Jihomoravský" },
];

const districtOptions = {
  Praha: [
    { value: "Praha 1", label: "Praha 1" },
    { value: "Praha 2", label: "Praha 2" },
  ],
  Středočeský: [
    { value: "Benešov", label: "Benešov" },
    { value: "Beroun", label: "Beroun" },
  ],
  Jihomoravský: [
    { value: "Brno-město", label: "Brno-město" },
    { value: "Znojmo", label: "Znojmo" },
  ],
};

function OfferForm() {
  const [formData, setFormData] = useState<FormData>({
    EstateType: "",
    FullName: "",
    Phone: "",
    Email: "",
    Region: "",
    District: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const currentDistricts =
    districtOptions[formData.Region as keyof typeof districtOptions] || [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/lead", {
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
              <section className="offer_form_section_select">
                <label>
                  <strong>Typ</strong> nemovitosti:
                  <span style={{ color: "red" }}>*</span>
                </label>

                <Select
                  options={estateTypeOptions}
                  value={estateTypeOptions.find(
                    (opt) => opt.value === formData.EstateType
                  )}
                  onChange={(selected) =>
                    setFormData({
                      ...formData,
                      EstateType: selected?.value || "",
                    })
                  }
                  placeholder="Zvol typ nemovitosti"
                  isClearable
                />
              </section>

              <section className="offer_form_section_select">
                <label>
                  <strong>Kraj</strong> nemovitosti
                  <span style={{ color: "red" }}>*</span>
                </label>
                <Select
                  options={regionOptions}
                  value={regionOptions.find(
                    (opt) => opt.value === formData.Region
                  )}
                  onChange={(selected) =>
                    setFormData({
                      ...formData,
                      Region: selected?.value || "",
                    })
                  }
                  placeholder="Zvol typ nemovitosti"
                  isClearable
                  isDisabled={!formData.EstateType}
                />
              </section>

              <section className="offer_form_section_select">
                <label
                  onClick={() => {
                    console.log("kraj array:", districtOptions);
                    console.log("current", currentDistricts);
                  }}
                >
                  <strong>Okres</strong> nemovitosti
                  <span style={{ color: "red" }}>*</span>
                </label>
                <Select
                  options={currentDistricts}
                  value={currentDistricts.find(
                    (opt) => opt.value === formData.District
                  )}
                  onChange={(selected) =>
                    setFormData({
                      ...formData,
                      District: selected?.value || "",
                    })
                  }
                  placeholder="Zvol okres"
                  isClearable
                  isDisabled={!formData.Region}
                />
              </section>

              {formData.EstateType && formData.District && formData.Region && (
                <section className="offer_form_section_input_container">
                  {" "}
                  <section className="offer_form_section_input">
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
                  <section className="offer_form_section_input">
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
                  <section className="offer_form_section_input">
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
