const button = document.querySelector("#somethingButton");
const somethingContent = document.querySelector("#somethingContent");

button.addEventListener("click", function (event) {
  somethingContent.innerHTML = "";
  window.history.pushState({}, "", "/something");
  const image = document.createElement("img");
  image.src =
    "https://i.pinimg.com/originals/81/97/77/819777fe717804d21488f63e6551c724.png";
  somethingContent.appendChild(image);
});
