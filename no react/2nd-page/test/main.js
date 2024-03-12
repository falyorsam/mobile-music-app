const container = document.querySelector(".container");
const pages = document.querySelector(".pages");
const navItems1 = document.querySelector(".nav-item1");
const navItems2 = document.querySelector(".nav-item2");
const navItems3 = document.querySelector(".nav-item3");
const navItems4 = document.querySelector(".nav-item4");
const navItems5 = document.querySelector(".nav-item5");
const navItems6 = document.querySelector(".nav-item6");
const navItems7 = document.querySelector(".nav-item7");
navItems1.addEventListener("click", () => {
  franst(
    pages,
    navItems1,
    navItems2,
    navItems3,
    navItems4,
    navItems5,
    navItems6,
    navItems7,
    0
  );
});
navItems2.addEventListener("click", () => {
  franst(
    pages,
    navItems2,
    navItems7,
    navItems1,
    navItems3,
    navItems4,
    navItems5,
    navItems6,
    14.28
  );
});
navItems3.addEventListener("click", () => {
  franst(
    pages,
    navItems3,
    navItems7,
    navItems1,
    navItems2,
    navItems4,
    navItems5,
    navItems6,
    14.28 * 2
  );
});
navItems4.addEventListener("click", () => {
  franst(
    pages,
    navItems4,
    navItems7,
    navItems1,
    navItems2,
    navItems3,
    navItems5,
    navItems6,
    14.28 * 3
  );
});
navItems5.addEventListener("click", () => {
  franst(
    pages,
    navItems5,
    navItems7,
    navItems1,
    navItems2,
    navItems3,
    navItems4,
    navItems6,
    14.28 * 4
  );
});
navItems6.addEventListener("click", () => {
  franst(
    pages,
    navItems6,
    navItems7,
    navItems1,
    navItems2,
    navItems3,
    navItems4,
    navItems5,
    14.28 * 5
  );
});
navItems7.addEventListener("click", () => {
  franst(
    pages,
    navItems7,
    navItems1,
    navItems2,
    navItems3,
    navItems4,
    navItems5,
    navItems6,
    14.28 * 6
  );
});
const franst = (
  pages,
  navItem1,
  navItem2remove,
  navItem3remove,
  navItem4remove,
  navItem5remove,
  navItem6remove,
  navItem7remove,
  Moves
) => {
  pages.style.transform = `translateX(-${Moves}%)`;

  navItem1.style.borderBottom = "2px solid yellow";
  navItem1.style.color = "white";

  navItem2remove.style.borderBottom = "none";
  navItem3remove.style.borderBottom = "none";
  navItem4remove.style.borderBottom = "none";
  navItem5remove.style.borderBottom = "none";
  navItem6remove.style.borderBottom = "none";
  navItem7remove.style.borderBottom = "none";
  navItem2remove.style.color = "#ffffff9f";
  navItem3remove.style.color = "#ffffff9f";
  navItem4remove.style.color = "#ffffff9f";
  navItem5remove.style.color = "#ffffff9f";
  navItem6remove.style.color = "#ffffff9f";
  navItem7remove.style.color = "#ffffff9f";
};
// container.addEventListener("scroll", function () {
//   const scrollPosition = container.scrollLeft;
//   const currentPage = Math.ceil(scrollPosition / window.innerWidth);

//   navItems.forEach((item, index) => {
//     if (index === currentPage) {
//       item.classList.add("active");
//     } else {
//       item.classList.remove("active");
//     }
//   });
// });
