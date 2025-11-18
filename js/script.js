const contentData = [
  {
    id: 1,
    title: "A House Of Dynamite",
    genre: "Thriller",
    year: 2025,
    rating: 6.4,
    img: "images/Movies/A House Of Dynamite.webp",
  },
  {
    id: 2,
    title: "Steve",
    genre: "Drama",
    year: 2025,
    rating: 7.2,
    img: "images/Movies/Steve.jpg",
    desc: "Over one intense day, the devoted head teacher of a last-chance reform school strives to keep his students in line while facing pressures of his own.",
  },
  {
    id: 3,
    title: "Xeno",
    genre: "Sci-Fi",
    year: 2025,
    rating: 6.8,
    img: "images/Movies/Xeno.jpg",
    desc: "A teenage girl develops an otherworldly bond with an alien after it crash-lands in the desert. As government agents close in, she must protect her new friend.",
  },
  {
    id: 4,
    title: "The Long Walk",
    genre: "Dystopian",
    year: 2025,
    rating: 7.5,
    img: "images/Movies/The Long Walk.jpg",
    desc: "In a dystopian, alternate-America ruled by a totalitarian regime, 50 teenage boys take part in a deadly annual walking contest where only one survivor remains.",
  },
  {
    id: 5,
    title: "The Astronaut",
    genre: "Sci-Fi Thriller",
    year: 2025,
    rating: 6.1,
    img: "images/Movies/The Astronaut.jpg",
    desc: "After returning from her first space mission, astronaut Sam Walker is placed under NASA’s care, but fears something extraterrestrial has followed her back.",
  },
  {
    id: 6,
    title: "Eddington",
    genre: "Western Comedy",
    year: 2025,
    rating: 7.8,
    img: "images/Movies/Eddington.jpg",
    desc: "In May of 2020, a standoff between a small-town sheriff and mayor sparks a powder keg as neighbor is pitted against neighbor in Eddington, New Mexico.",
  },
  {
    id: 7,
    title: "Weapons",
    genre: "Horror",
    year: 2025,
    rating: 7.0,
    img: "images/Movies/Weapons.jpg",
    desc: "When all but one child from the same class mysteriously vanish on the same night at exactly the same time, a community is left questioning who is behind it.",
  },
  {
    id: 8,
    title: "Play Dirty",
    genre: "Crime",
    year: 2025,
    rating: 6.9,
    img: "images/Movies/Play Dirty.jpg",
    desc: "Expert thief Parker gets a shot at a major heist, but to pull it off he and his team must outsmart a South American dictator, the New York mob, and the world's richest man.",
  },
  {
    id: 9,
    title: "The Lost Bus",
    genre: "Drama",
    year: 2025,
    rating: 7.4,
    img: "images/Movies/The Lost Bus.jpg",
    desc: "A determined father risks everything to rescue a dedicated teacher and her students from a raging wildfire.",
  },
  {
    id: 10,
    title: "Superman",
    genre: "Action",
    year: 2025,
    rating: 8.5,
    img: "images/Movies/Superman.jpg",
    desc: "Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent.",
  },
];

function generateCards(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.dataset.id = item.id;
    card.innerHTML = `
        <div class="movie-poster">
            <img src="${item.img}" alt="${item.title}">
            <div class="movie-rating">${item.rating}</div>
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${item.title}</h3>
            <div class="movie-meta">
                <span>${item.genre}</span>
                <span>${item.year || item.season || ""}</span>
            </div>
        </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  generateCards("moviesGrid", contentData.slice(0, 5));
  generateCards("showsGrid", contentData.slice(5));
});
