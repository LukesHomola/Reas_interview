import { useState, useEffect } from "react";
import type { FormData } from "../interfaces";
import "../css/offerForm.css";
import Select from "react-select";

import svgFormGif from "../assets/svg_form.gif";

const submitAlertBar = () => {
  return (
    <div className="offer_alert_bar">
      <h3>Děkujeme za vyplnění formuláře. </h3>
      <p>brzy se Vám ozveme.</p>
    </div>
  );
};

function OfferForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    EstateType: "",
    FullName: "",
    Phone: "",
    Email: "",
    Region: "",
    District: "",
  });

  const resetForm = () => {
    setFormData({
      EstateType: "",
      FullName: "",
      Phone: "",
      Email: "",
      Region: "",
      District: "",
    });
  };

  const [regions, setRegions] = useState<{ value: string; label: string }[]>(
    []
  );
  const [districts, setDistricts] = useState<
    { value: string; label: string }[]
  >([]);
  const [realEstates, setRealEstates] = useState<
    { value: string; label: string }[]
  >([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetch("/real-estates")
      .then((res) => res.json())
      .then((data) =>
        setRealEstates(
          data.map((estate: { value: string }) => ({
            value: estate.value,
            label: estate.value,
          }))
        )
      );
  }, []);

  useEffect(() => {
    fetch("/regions")
      .then((res) => res.json())
      .then((data) =>
        setRegions(
          data.map((region: { name: string }) => ({
            value: region.name,
            label: region.name,
          }))
        )
      );
  }, []);

  useEffect(() => {
    if (!formData.Region) {
      setDistricts([]);
      return;
    }

    fetch(`/districts?region=${encodeURIComponent(formData.Region)}`)
      .then((res) => res.json())
      .then((data: string[]) =>
        setDistricts(data.map((d) => ({ value: d, label: d })))
      );
  }, [formData.Region]);

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

  useEffect(() => {
    if (submitted) {
      resetForm();
      const timeout = setTimeout(() => {
        setSubmitted(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [submitted]);

  return (
    <div className="offer_form_wrap">
      {submitted && submitAlertBar()}
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
                  options={realEstates}
                  value={realEstates.find(
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
                  options={regions}
                  value={regions.find((opt) => opt.value === formData.Region)}
                  onChange={(selected) =>
                    setFormData({
                      ...formData,
                      Region: selected?.value || "",
                    })
                  }
                  placeholder="Zvol typ nemovitosti"
                  isClearable
                  isDisabled={!formData.EstateType && formData.Region === ""}
                />
              </section>

              <section className="offer_form_section_select">
                <label>
                  <strong>Okres</strong> nemovitosti
                  <span style={{ color: "red" }}>*</span>
                </label>
                <Select
                  options={districts}
                  value={districts.find(
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
                  isDisabled={!formData.Region && formData.District === ""}
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
