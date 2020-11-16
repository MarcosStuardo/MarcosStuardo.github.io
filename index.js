var one = document.getElementById("bio");

function bioMore() {
  one.textContent = ("Read More");
}
function bioMoreOriginal() {
  one.textContent = ("BIO");
}
one.addEventListener('mouseover', bioMore);
one.addEventListener('mouseout', bioMoreOriginal);
