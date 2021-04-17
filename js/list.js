function priceSwitcher() {
  const nettoButton = document.querySelector(".netto");
  const bruttoButton = document.querySelector(".brutto");

  const nettoPrice = document.getElementsByClassName("netto-price");
  const bruttoPrice = document.getElementsByClassName("brutto-price");

  nettoButton.addEventListener(
    "click",
    function () {
      nettoButton.classList.add("current-chosen");
      bruttoButton.classList.remove("current-chosen");

      for (var i = 0; i < bruttoPrice.length; i += 1) {
        bruttoPrice[i].style.display = "none";
      }
      for (var i = 0; i < nettoPrice.length; i += 1) {
        nettoPrice[i].style.display = "block";
      }
    },
    false
  );

  bruttoButton.addEventListener(
    "click",
    function () {
      bruttoButton.classList.add("current-chosen");
      nettoButton.classList.remove("current-chosen");

      for (var i = 0; i < nettoPrice.length; i += 1) {
        nettoPrice[i].style.display = "none";
      }
      for (var i = 0; i < bruttoPrice.length; i += 1) {
        bruttoPrice[i].style.display = "block";
      }
    },
    false
  );
}

priceSwitcher();

var coll = document.getElementsByClassName("promo-code");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
