const exploreGallery = document.getElementById("explore_gallery");

const upArrow1 = document.querySelector(".up-arrow-1");
const upArrow2 = document.querySelector(".up-arrow-2");
const upArrow3 = document.querySelector(".up-arrow-3");
const upArrow4 = document.querySelector(".up-arrow-4");

function rightTranslate() {
  exploreGallery.style.transform = "translateX(-100vw)";
  upArrow1.style.display = "none";
  upArrow2.style.display = "block";
}
function rightTranslate2() {
  exploreGallery.style.transform = "translateX(-200vw)";
  upArrow2.style.display = "none";
  upArrow3.style.display = "block";
}
function rightTranslate3() {
  exploreGallery.style.transform = "translateX(-300vw)";
  upArrow3.style.display = "none";
  upArrow4.style.display = "block";
}
function leftTranslate() {
  exploreGallery.style.transform = "translateX(0)";
  upArrow1.style.display = "block";
  upArrow2.style.display = "none";
}
function leftTranslate2() {
  exploreGallery.style.transform = "translateX(-100vw)";
  upArrow2.style.display = "block";
  upArrow3.style.display = "none";
}
function leftTranslate3() {
  exploreGallery.style.transform = "translateX(-200vw)";
  upArrow3.style.display = "block";
  upArrow4.style.display = "none";
}
