export const SECTIONS = [
  { id: "home", num: "01", label: "Intro", kicker: "Introduction" },
  { id: "services", num: "02", label: "Services", kicker: "Services" },
  { id: "work", num: "03", label: "Work", kicker: "Selected work" },
  { id: "about", num: "04", label: "About", kicker: "About me" },
  { id: "contact", num: "05", label: "Contact", kicker: "Contact" },
];

export const SECTION_IDS = SECTIONS.map((section) => section.id);

export const CURRENT_YEAR = new Date().getFullYear();

export const PROFILE = {
  name: "Arvin Jay Nadal",
  role: "Software Engineer",
  location: "Cavite, Philippines",
  email: "nadal.arvin22@gmail.com",
  phone: "(+63) 976-371-1501",
  phoneHref: "tel:+639763711501",
  github: "https://github.com/vinhelper",
  linkedin: "https://ph.linkedin.com/in/arvin-jay-nadal-637b571b0",
  availableForWork: true,
};
