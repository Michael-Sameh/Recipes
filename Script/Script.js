let cards = document.getElementById("container");

for (let i = 0; i < recipes.length; i++) {
  cards.innerHTML +=
    '<div class="card"><p>' +
    recipes[i].name +
    '</p><img src="' +
    recipes[i].image +
    '" alt="' +
    recipes[i].name +
    '" width="120px" height="80px" /><br /><br /><div class="card-button"><a href="Recipe.html" class="button">See Recipe</a></div></div>';
}

let clicked = document.querySelectorAll(".button");

clicked.forEach(function (recip, index) {
  recip.addEventListener("click", function () {
    localStorage.setItem("index", index);
  });
});
