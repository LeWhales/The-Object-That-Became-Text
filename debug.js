const preferences = { theme: "dark", compact: true };

localStorage.getItem("preferences", preferences);

function savepreferences(pref) {
    const saved = localStorage.setItem(preferences, JSON.stringify(pref));
}
console.log(saved.theme);