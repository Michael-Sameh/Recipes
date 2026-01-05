let title = document.querySelector("title");

let index = Number(localStorage.getItem("index"));

title.textContent = recipes[index].name;

let difficulty = document.getElementById("difficulty");

document.getElementById("header").textContent = recipes[index].name;
document.getElementById("tagline").textContent = recipes[index].tagline;
document.getElementById("servings").textContent = recipes[index].servings;
difficulty.textContent = recipes[index].difficulty;
document.getElementById("cuisine").textContent = recipes[index].cuisine;
document.getElementById("category").textContent = recipes[index].category;
document.getElementById("rating").textContent = recipes[index].rating;
let imgsrc = document.getElementById("img");
imgsrc.innerHTML =
  '<img src="' +
  recipes[index].image +
  '" alt="' +
  recipes[index].name +
  '" />';

if (
  recipes[index].difficulty == "Easy" ||
  recipes[index].difficulty == "Very Easy"
) {
  difficulty.style.color = "#27AE60";
} else if (recipes[index].difficulty == "Hard") {
  difficulty.style.color = "#C0392B";
} else {
  difficulty.style.color = "#E67E22";
}

let ing = document.getElementById("ingredientslist");

for (let i = 0; i < recipes[index].ingredients.length; i++) {
  ing.innerHTML += "<li>" + recipes[index].ingredients[i] + "</li>";
}

let stp = document.getElementById("steplist");

for (let i = 0; i < recipes[index].steps.length; i++) {
    stp.innerHTML += "<li>" + recipes[index].steps[i] + "</li>";
}

document.getElementById("tips").textContent = recipes[index].tips;