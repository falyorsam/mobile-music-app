const container = document.querySelector(".container");
const pages = document.querySelector(".pages");
const navItems1 = document.querySelector(".nav-item1");
const navItems2 = document.querySelector(".nav-item2");
const navItems3 = document.querySelector(".nav-item3");
const navItems4 = document.querySelector(".nav-item4");
const navItems5 = document.querySelector(".nav-item5");
const navItems6 = document.querySelector(".nav-item6");
const navItems7 = document.querySelector(".nav-item7");
const animationClick = (icon) => {
  setTimeout(() => {
    icon.parentElement.classList.remove("clickAnimation");
  }, 100);

  icon.parentElement.classList.add("clickAnimation");
};
const animationClickBar = (icon) => {
  setTimeout(() => {
    icon.classList.remove("clickAnimation");
  }, 100);

  icon.classList.add("clickAnimation");
};
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
  // animationClick(navItem1.)
  // childElement;
  animationClickBar(navItem1);
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
/////////////////////////////
// const NavSittingsButton = document.querySelector(".insideToClick");
const NavSittingsButton = document.querySelector(".NavSittingsButton");
const NavUserButton = document.querySelector(".fa-user");
const NavSearchButton = document.querySelector(".fa-magnifying-glass");
////////////////
const profileSage = document.querySelector(".profile-sage");
NavUserButton.addEventListener("click", () => {
  animationClick(NavUserButton);
  profileSage.classList.add("showBlockProfile");
});
//closeProfile
const closeProfile = document.querySelector(".closeProfile");
closeProfile.addEventListener("click", () => {
  profileSage.classList.remove("showBlockProfile");
});
///////////////////
const navSittingBox = document.querySelector(".navSittingBox");
const removeIT = document.querySelectorAll(".removeIT");
console.log(removeIT);
removeIT.forEach((elemnt) => {
  elemnt.addEventListener("click", () => {
    console.log("clicked");
    navSittingBox.classList.remove("showBlockDown");
  });
});

NavSittingsButton.addEventListener("click", () => {
  navSittingBox.classList.add("showBlockDown");
  animationClick(NavSittingsButton);
});
/////////////////
NavSearchButton.addEventListener("click", () => {
  animationClick(NavSearchButton);
});
////////////////nav-item1 songSittings
const ALLSittings = document.querySelectorAll(".fa-ellipsis-vertical");
const songSittings = document.querySelectorAll(".songSittings");
ALLSittings.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element);
    animationClickBar(element.parentElement);
  });
});
///////////////////////
const sittingsSage = document.querySelector(".sittings-sage");
const cancelSittingsSage = document.querySelector(".cancelSittingsSage");
cancelSittingsSage.addEventListener("click", () => {
  sittingsSage.classList.remove("showBlock");
});
songSittings.forEach((element) => {
  element.addEventListener("click", () => {
    sittingsSage.classList.add("showBlock");
  });
});
//////////////////////
const plus = document.querySelector(".fa-plus");
plus.addEventListener("click", () => {
  animationClick(plus);
});
/////////////////////////////////
//songSittings
const closeSideBar = document.querySelector(".closeSideBar");

const audioNavSideBar = document.querySelector(".audioNavSideBar");
const sittingsI = document.querySelector(".sittings");
sittingsI.addEventListener("click", () => {
  audioNavSideBar.classList.add("animationRight");
  const icon = sittingsI.children[0];
  icon.classList.add("iconRotate");
  icon.style.transform = "rotate(180deg)";
});
closeSideBar.addEventListener("click", () => {
  console.log("close");
  audioNavSideBar.classList.remove("animationRight");
  const icon = sittingsI.children[0];
  icon.style.transform = "rotate(0deg)";
});
///////////////////////////

const barIcon = document.querySelectorAll(".icon");
barIcon.forEach((element) => {
  const parnt = element.parentElement;
  element.addEventListener("click", () => {
    setTimeout(() => {
      element.classList.remove("clickAnimation");
    }, 100);

    element.classList.add("clickAnimation");
  });
});

////////////////////////////////////
const searchSage = document.querySelector(".search-sage");
const closeSearchBar = document.querySelector(".close-searchBar");
const searchSy = document.querySelector(".search");
closeSearchBar.addEventListener("click", () => {
  searchSage.style.display = "none";
});
searchSy.addEventListener("click", () => {
  setTimeout(() => {
    searchSage.style.display = "block";
  }, 200);
  searchSage.style.display = "none";
});
//
const insideToClick_1 = document.querySelector(".insideToClick_1");
insideToClick_1.addEventListener("click", () => {
  setTimeout(() => {
    insideToClick_1.classList.remove("clickAnimation");
  }, 100);

  insideToClick_1.classList.add("clickAnimation");
});
//
////////////////////////////////////
const songsCreated = document.querySelector(".songsCreated");
console.log(songsCreated);
const profileSlides_1 = document.querySelector(".profileSlides-1");
songsCreated.addEventListener("click", () => {
  profileSlides_1.innerHTML = `
  <div class="FirstTY">
    <div className="songCreatorOnes" style="padding:3rem;
    text-transform: capitalize" >
      <div className="songy" style="text-align: center">
        no songs yet
      </div>
    </div>
  </div>
  `;
});
////////////////////////////////////
const favoritSv = document.querySelector(".favoritSv");
favoritSv.addEventListener("click", () => {
  profileSlides_1.innerHTML = `
  <div class="FirstTY">
    <div className="songCreatorOnes" style="padding:3rem;
    text-transform: capitalize" >
      <div className="songy" style="text-align: center">
        no favorite music
      </div>
    </div>
  </div>
  `;
});
////////////////////////////////////
const followingArtist = document.querySelector(".followingArtist");
followingArtist.addEventListener("click", () => {
  profileSlides_1.innerHTML = `
  <div class="FirstTY">
    <div className="songCreatorOnes" style="padding:3rem;
    text-transform: capitalize" >
      <div className="songy" style="text-align: center">
        this user doesn't follow any artist
      </div>
    </div>
  </div>
  `;
});
//////////////////////////////////////
const seeALl = document.querySelectorAll(".seeALl");
const closeAll = document.querySelector(".closeAll");
closeAll.addEventListener("click", () => {
  console.log(seeAllPageSage);
  seeAllPageSage.classList.remove("showBlockProfile");
});
const seeAllPageSage = document.querySelector(".seeAllPage-sage");
const dotsee = document.querySelector(".dotsee");
seeALl.forEach((elemnt) => {
  elemnt.addEventListener("click", () => {
    seeAllPageSage.classList.add("showBlockProfile");
  });
});
dotsee.addEventListener("click", () => {
  sittingsSage.classList.add("showBlock");
});
//////////////////////////////////////
//////////////////////////////////////
