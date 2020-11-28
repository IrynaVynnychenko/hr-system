document.addEventListener("DOMContentLoaded", () => {
  flatpickr("#date", {
    dateFormat: "d.m.Y",
    locale: "ru",
    disableMobile: true,
    defaultDate: `${new Date().toLocaleDateString()}`,
    mode: "range",
    defaultDate: ["18-10-2020", "26-10-2020"],
    inline: true,
    minDate: "today",
  });

  flatpickr("#eventDate", {
    dateFormat: "d.m.Y",
    locale: "ru",
    disableMobile: true,
    defaultDate: `${new Date().toLocaleDateString()}`,
    defaultDate: ["12-04-2020"],
  });
});
