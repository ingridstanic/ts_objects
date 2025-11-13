import { FavGames } from './models/FavGames'
import './style.css'
import { createHtmlForTopGames, createHTMLHeader } from './utils';

const rdr2 = new FavGames ("Red Dead Redemption 2", "Rockstar Games", "2018", "Open World, Western, Action-adventure, Non-linear", "10+++", "433h");
const cp2077 = new FavGames ("Cyberpunk 2077", "CD Project RED", "2020", "RPG, Open world, First-person shooter, Sci-Fi", "8.9", "209h");
const lou2 = new FavGames ("Last of Us Part II", "Naughty Dog", "2020", "Action-adventure, Survival horror, Story-driven, Thrid-person shooter", "9.2", "152h");
const swo = new FavGames ("Starwars Outlaws", "Massive Entertainment", "2024", "Action-adventure, Open World, Third-person shooter, Sci-Fi", "8.2", "131h");
const swjs = new FavGames ("Starwars Jedi Survivor", "Respawn Entertainment", "2023", "Action-adventure, Third-person combat, Sci-Fi, Story-driven", "8.5", "95h");

const myTopGames = [rdr2, cp2077, lou2, swo, swjs];

createHTMLHeader();

createHtmlForTopGames(myTopGames);