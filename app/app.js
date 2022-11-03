var GAMES = [
  {
    gameTitle: "Sonic",
    gameThumbImg: "thumb1_300x300.jpg",
    gameBriefDescription:
      "sit amet justo donec enim diam vulputate ut pharetra sit, sit amet justo donec enim diam vulputate ut pharetra sit",
    gameRating: "E",
  },
  {
    gameTitle: "The Last of Us",
    gameThumbImg: "thumb2_300x300.jpg",
    gameBriefDescription:
      "sit amet justo donec enim diam vulputate ut pharetra sit, sit amet justo donec enim diam vulputate ut pharetra sit",
    gameRating: "M",
  },
  {
    gameTitle: "Spider-Man Miles Morales",
    gameThumbImg: "thumb3_300x300.jpg",
    gameBriefDescription:
      "sit amet justo donec enim diam vulputate ut pharetra sit, sit amet justo donec enim diam vulputate ut pharetra sit",
    gameRating: "T",
  },
  {
    gameTitle: "Assassin's Creed Valhalla",
    gameThumbImg: "thumb4_300x300.jpg",
    gameBriefDescription:
      "sit amet justo donec enim diam vulputate ut pharetra sit, sit amet justo donec enim diam vulputate ut pharetra sit",
    gameRating: "M",
  },
  {
    gameTitle: "Halo 4",
    gameThumbImg: "thumb5_300x300.jpg",
    gameBriefDescription:
      "sit amet justo donec enim diam vulputate ut pharetra sit, sit amet justo donec enim diam vulputate ut pharetra sit",
    gameRating: "T",
  },
  {
    gameTitle: "Watch Dogs",
    gameThumbImg: "thumb6_300x300.jpg",
    gameBriefDescription:
      "sit amet justo donec enim diam vulputate ut pharetra sit, sit amet justo donec enim diam vulputate ut pharetra sit",
    gameRating: "T",
  },
  {
    gameTitle: "Uncharted 4",
    gameThumbImg: "thumb7_300x300.jpg",
    gameBriefDescription:
      "sit amet justo donec enim diam vulputate ut pharetra sit, sit amet justo donec enim diam vulputate ut pharetra sit",
    gameRating: "T",
  },
  {
    gameTitle: "FIFA 19",
    gameThumbImg: "thumb8_300x300.jpg",
    gameBriefDescription:
      "sit amet justo donec enim diam vulputate ut pharetra sit, sit amet justo donec enim diam vulputate ut pharetra sit",
    gameRating: "E",
  },
  {
    gameTitle: "Gears of War 2",
    gameThumbImg: "thumb9_300x300.jpg",
    gameBriefDescription:
      "sit amet justo donec enim diam vulputate ut pharetra sit, sit amet justo donec enim diam vulputate ut pharetra sit",
    gameRating: "M",
  },
  {
    gameTitle: "Witcher 3",
    gameThumbImg: "thumb10_300x300.jpg",
    gameBriefDescription:
      "sit amet justo donec enim diam vulputate ut pharetra sit, sit amet justo donec enim diam vulputate ut pharetra sit",
    gameRating: "M",
  },
];

function loadData() {
  $.each(GAMES, function (idx, game) {
    $("#app").append(`      <div id ="${idx}" class="game-holder">
    <h2>${game.gameTitle}</h2>
    <div class="game-image">
      <img src="images/games-assets/${game.gameThumbImg}" alt="sonic" />
    </div>
    <div class="brief-rating">
      <div class="brief-des">
 ${game.gameBriefDescription}
      </div>
      <div class="rating">Rating: ${game.gameRating}</div>
    </div>
  </div>`);
    console.group(game.gameTitle);
  });

  // for (let i = 0; i < GAMES.length; i++){
  //     console.log(GAMES[i].gameTitle);
  // }
}

function initListeners() {}

$(document).ready(function () {
  // initListeners();
  loadData();
});
