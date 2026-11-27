const preferences = { theme: "dark", compact: true };

localStorage.setItem("preferences", JSON.stringify(preferences));

const saved = JSON.parse(localStorage.getItem("preferences"));
console.log(saved.theme);
