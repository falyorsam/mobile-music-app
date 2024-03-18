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
const PLAYSSy = document.querySelectorAll(".PLAYSS");
PLAYSSy.forEach((e) => {
  e.addEventListener("click", () => {
    seeAllPageSage.classList.add("showBlockProfile");
  });
});
//////////////////////////////////////

const sortTheSongs = document.querySelector(".sortTheSongs");
const closeSort = document.querySelector(".closeSort");
const ClickSort = document.querySelector(".ClickSort");
const sortItBy = document.querySelectorAll(".sortItBy");
const THESORTNAME = document.querySelector(".THESORTNAME");
ClickSort.addEventListener("click", () => {
  sortTheSongs.classList.add("showBlockProfile");
});
closeSort.addEventListener("click", () => {
  sortTheSongs.classList.remove("showBlockProfile");
});
sortItBy.forEach((e) => {
  e.addEventListener("click", () => {
    console.log();
    ////////////
    if (e.classList[1] === "sortItByTitle") {
      THESORTNAME.textContent = "Title";
      sortTheSongs.classList.remove("showBlockProfile");
    } else if (e.classList[1] === "sortItByArtist") {
      THESORTNAME.textContent = "Artist";
      sortTheSongs.classList.remove("showBlockProfile");
    } else if (e.classList[1] === "sortItByAlbum") {
      THESORTNAME.textContent = "Album";
      sortTheSongs.classList.remove("showBlockProfile");
    } else if (e.classList[1] === "sortItByAlbumArtist") {
      THESORTNAME.textContent = "Album Artist";
      sortTheSongs.classList.remove("showBlockProfile");
    } else if (e.classList[1] === "sortItByComposer") {
      THESORTNAME.textContent = "Composer";
      sortTheSongs.classList.remove("showBlockProfile");
    } else if (e.classList[1] === "sortItBySize") {
      THESORTNAME.textContent = "Size";
      sortTheSongs.classList.remove("showBlockProfile");
    } else if (e.classList[1] === "sortItByYear") {
      THESORTNAME.textContent = "Year";
      sortTheSongs.classList.remove("showBlockProfile");
    } else if (e.classList[1] === "sortItByDateAdded") {
      THESORTNAME.textContent = "Date Added";
      sortTheSongs.classList.remove("showBlockProfile");
    } else if (e.classList[1] === "sortItByDateModified") {
      THESORTNAME.textContent = "Date Modified";
      sortTheSongs.classList.remove("showBlockProfile");
    }
    //////////////
    setTimeout(() => {
      e.classList.remove("clickAnimation");
    }, 100);

    e.classList.add("clickAnimation");
  });
});

//////////////////////////////////////
const oneFolder = document.querySelectorAll(".insinde");
oneFolder.forEach((e) => {
  e.addEventListener("click", () => {
    seeAllPageSage.classList.add("showBlockProfile");
  });
});
//////////////////////////////////////
const songHlf = document.querySelectorAll(".songHlf");
const songyso = document.querySelector(".songyso");
const goesDown = document.querySelector(".goesDown");
songHlf.forEach((e) => {
  e.addEventListener("click", () => {
    songyso.classList.add("showBlockProfile");
  });
});
goesDown.addEventListener("click", () => {
  songyso.classList.remove("showBlockProfile");
});
//////////////////////////////////////
const theFirstWord = document.querySelector(".theFirstWord");
const Stop = document.querySelector(".stop");
const icon = Stop.querySelector("i");
const AddToFavorit = document.querySelector(".AddToFavorit");
const FavIcon = AddToFavorit.querySelector("i");
const song = document.getElementById("jeTeLaisserai");
const TimeLine = document.querySelector(".timeline");
const TimePassOfSong = document.querySelector(".TimePassOfSong");
const TimeOfSong = document.querySelector(".TimeOfSong");
const duration = song.duration;
const minutes = Math.floor(duration / 60);
const seconds = Math.floor(duration % 60);
const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
  .toString()
  .padStart(2, "0")}`;
// TimePassOfSong.textContent = formattedTime;
const Icons = (fax, ChangeIcon, SecondIcon, Elements, ratio1, song) => {
  if (fax.classList.contains(ChangeIcon)) {
    fax.classList.remove(ChangeIcon);
    fax.classList.add(SecondIcon);
    // song.play();
  } else {
    fax.classList.remove(SecondIcon);
    fax.classList.add(ChangeIcon);
    // song.pause();
  }
  Elements.style.transform = `scale(${ratio1})`;

  setTimeout(() => {
    Elements.style.transform = `scale(1)`;
  }, 300);
};
const playSong = (fax, ChangeIcon) => {
  if (fax.classList.contains(ChangeIcon)) {
    song.pause();
  } else {
    song.play();
  }
};
song.addEventListener("timeupdate", () => {
  const currentTime = song.currentTime;
  const min = Math.floor(currentTime / 60);
  const sec = Math.floor(currentTime % 60);
  const formatted = `${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;
  TimeOfSong.textContent = formatted;
  const duration = song.duration;
  const progress = (currentTime / duration) * 100;
  TimeLine.style.width = progress + "%";
});

Stop.addEventListener("click", (e) => {
  Icons(icon, "fa-play", "fa-pause", Stop, 1.05, song);
  playSong(icon, "fa-play");
});
AddToFavorit.addEventListener("click", (e) => {
  Icons(FavIcon, "fa-regular", "fa-solid", AddToFavorit, 1.2, song);
});
