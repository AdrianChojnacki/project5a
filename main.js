// Selectors
const input = document.getElementById("pass");
const div = document.querySelector(`.message`);

// Function arrays
const passwords = ["user", "wiosna", "Ania"];
const messages = [
  "wyjechałam na zawsze",
  "piękna pora roku",
  "fajny styl masz",
];

// Input function
input.addEventListener("input", (e) => {
  //   console.log(e.target);
  //   console.log(this);

  div.textContent = "";

  const text = e.target.value;

  passwords.forEach((password, index) => {
    if (password === text) {
      div.textContent = messages[index];
      e.target.value = "";
    }
  });
});

// Focus function
input.addEventListener(`focus`, (e) => {
  e.target.classList.add("active");
});

// Blur function
input.addEventListener(`blur`, (e) => {
  e.target.classList.remove("active");
});
