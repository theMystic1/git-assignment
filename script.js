const span = document.querySelector(".span");

const body = document.querySelector("form");
const btn = document.querySelector(".btn");
const inputEl = document.querySelector(".inputEl");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const inputElm = document.querySelector(".inputEl").value;
  if (!inputElm) return;
  span.innerHTML = inputElm;
});

// span.innerHTML = inputEl.value;
