let btnBack = document.querySelector('button');
btnBack.addEventListener('click', () => {
    window.history.back();
});

const shrinkableBox = document.getElementById("shrinkable-box");

shrinkableBox.addEventListener("click", () => {
  shrinkableBox.style.transform = "scale(0.8)";
});
