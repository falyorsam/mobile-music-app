const songContainer = document.querySelector(".songContainer");
const clickElement = document.querySelector(".bro");
const sittingsSage = document.querySelector(".sittings-sage");

clickElement.addEventListener("click", function () {
  console.log("Clicked");

  if (sittingsSage.style.transform === "translateY(10000px)") {
    sittingsSage.style.transform = "translateY(-0px)";
    sittingsSage.style.display = "block";
  } else {
    sittingsSage.style.transform = "translateY(10000px)";
    sittingsSage.style.display = "none";
  }
});
