class Storage {
    /* Getting the films from the local storage. */
    static getFilmsFromStorage() {
        let films;

        if (localStorage.getItem("films") === null) films = [];
        else films = JSON.parse(localStorage.getItem("films"));

        return films;
    }

    /* Adding the film to the local storage. */
    static addFilmToStorage(newFilm) {
        let films = this.getFilmsFromStorage();

        films.push(newFilm);
        localStorage.setItem("films", JSON.stringify(films));
    }

    /* Deleting the film from the local storage. */
    static deleteFilmFromStorage(filmTitle) {
        let films = this.getFilmsFromStorage();
        //splice
        films.forEach((film, index) => {
            if (film.title === filmTitle) {
                films.splice(index, 1);
            }
        });

        localStorage.setItem("films", JSON.stringify(films));
    }

    /* Removing the films from the local storage. */
    static clearAllFilmsFromStorage() {
        localStorage.removeItem("films");
    }
}
