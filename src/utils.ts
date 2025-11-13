import type { FavGames } from "./models/FavGames";

export const createHtmlForTopGames = (myTopGames: FavGames[]) => {
    const gameSection = document.getElementById("topGames");

  myTopGames.forEach((game) => {
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const dev = document.createElement("p");
    const year = document.createElement("p");
    const genre = document.createElement("p");
    const rating = document.createElement("p");
    const hours = document.createElement("p");

    card.className = "gameCard";
    title.innerHTML = game.title;
    dev.innerHTML = game.developer;
    year.innerHTML = game.realeaseYear;
    genre.innerHTML = game.genre;
    rating.innerHTML = "My rating: " + game.myRating;
    hours.innerHTML = "Hours played: " + game.hoursPlayed;

    card.appendChild(title);
    card.appendChild(dev);
    card.appendChild(year);
    card.appendChild(genre);
    card.appendChild(rating);
    card.appendChild(hours);

    gameSection?.appendChild(card);
  });
};

export const createHTMLHeader = () => {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");

    h1.className = "myHeader";
    h1.innerHTML = "TopGame+";

    document.body.prepend(header);
    header.appendChild(h1);
}
