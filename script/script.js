document.getElementById("order").addEventListener("click", function () {
  dropdown("order");
});
document.getElementById("account").addEventListener("click", function () {
  dropdown("account");
});
document.getElementById("terms").addEventListener("click", function () {
  dropdown("terms");
});
document.getElementById("more").addEventListener("click", function () {
  dropdown("more");
});

function dropdown(x) {
  document.getElementById(x).children[1].classList.toggle("drop");
}
