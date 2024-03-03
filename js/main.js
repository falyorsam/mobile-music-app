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
TimePassOfSong.textContent = formattedTime;
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
