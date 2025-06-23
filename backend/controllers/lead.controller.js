const Lead = require("../models/lead.model");

const createLead = async (ctx) => {
  const { EstateType, FullName, Phone, Email, Region, District } =
    ctx.request.body;

  const errors = [];
  if (!EstateType || !FullName || !Phone || !Email || !Region || !District) {
    ctx.status = 400;
    ctx.body = { error: "Všechna pole jsou povinná." };
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(Email)) {
    errors.push("Neplatný email.");
  }

  const phoneRegex = /^(\+420)? ?\d{3} ?\d{3} ?\d{3}$/;
  if (!phoneRegex.test(Phone)) {
    errors.push("Neplatné telefonní číslo.");
  }

  if (errors.length > 0) {
    ctx.status = 400;
    ctx.body = { error: errors };
    return;
  }

  try {
    const lead = new Lead({
      EstateType,
      FullName,
      Phone,
      Email,
      Region,
      District,
    });
    await lead.save();
    ctx.status = 201;
    ctx.body = { message: "Lead úspěšně uložen", lead };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { error: "Chyba při ukládání leadu" };
  }
};

module.exports = { createLead };
