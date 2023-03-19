class UI {
    /* Adding the film to the UI. */
    static addFilmToUI(newFilm) {
        const filmList = document.querySelector("#films");

        filmList.innerHTML += ` 
                            <div class="card col-md-3 text-center"">
                                <img src="${newFilm.url}" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title">${newFilm.title}</h5>
                                    <p class="card-text">${newFilm.director}</p>
                                    <a href="#" id="delete-film" class="btn btn-danger">Delete Movie</a>
                                </div>
                            </div>
                            `;
    }

    /* A function that clears the input fields. */
    static clearInputs(element1, element2, element3) {
        element1.value = "";
        element2.value = "";
        element3.value = "";
    }

    /* Creating a message for display on ui. */
    static displayMessages(message, type) {
        const cardBody = document.querySelector(".card-body");

        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;

        cardBody.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 1000);
    }

    /* A function that loads all the films in the local storage. */
    static loadAllFilms(films) {
        const filmList = document.querySelector("#films");

        films.forEach((film) => {
            filmList.innerHTML += `
                                <div class="card col-md-3 text-center"">
                                    <img src="${film.url}" class="card-img-top">
                                    <div class="card-body">
                                        <h5 class="card-title">${film.title}</h5>
                                        <p class="card-text">${film.director}</p>
                                        <a href="#" id="delete-film" class="btn btn-danger">Delete Movie</a>
                                    </div>
                                </div>
                                `;
        });
    }

    /* Deleting the film from the UI. */
    static deleteFilmFromUI(element) {
        element.parentElement.parentElement.remove();
    }

    /* A function that clears all the films from the UI. */
    static clearAllFilmsFromUI() {
        const filmList = document.querySelector("#films");

        while (filmList.firstElementChild !== null) {
            filmList.firstElementChild.remove();
        }
    }
}
