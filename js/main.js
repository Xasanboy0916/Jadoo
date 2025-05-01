// Til matnlar lug'ati
const messages = {
  uz: "Xush kelibsiz!",
  ru: "Добро пожаловать!",
  en: "Welcome!",
};

const select = document.getElementById("language-select");
const message = document.getElementById("welcome-message");

// Saqlangan tilni o'qish yoki default — 'uz'
const savedLang = localStorage.getItem("lang") || "uz";
select.value = savedLang;
message.textContent = messages[savedLang];

// Til o'zgartirilganda
select.addEventListener("change", function () {
  const newLang = this.value;
  localStorage.setItem("lang", newLang);
  message.textContent = messages[newLang];
});
