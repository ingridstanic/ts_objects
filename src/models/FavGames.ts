export class FavGames {
    title: string;
    developer: string;
    realeaseYear: string;
    genre: string;
    myRating: string;
    hoursPlayed: string;

    constructor (title: string, developer: string, realeaseYear: string, genre: string, myRating: string, hoursPlayed: string) {
        this.title = title;
        this.developer = developer;
        this.realeaseYear = realeaseYear;
        this.genre = genre;
        this.myRating = myRating;
        this.hoursPlayed = hoursPlayed;
    }
}