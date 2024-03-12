const songContainer = document.querySelector(".songContainer");
const clickElement = document.querySelector(".bro");
const sittingsSage = document.querySelector(".sittings-sage");
clickElement.addEventListener("click", function () {
  console.log("Clicked");
  console.log(clickElement);

  if (sittingsSage.style.transform === "translateY(10000px)") {
    sittingsSage.style.transform = "translateY(-0px)";
  } else {
    sittingsSage.style.transform = "translateY(10000px)";
  }
});
