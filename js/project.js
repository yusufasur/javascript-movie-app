/* Selecting the elements from the DOM. */
const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelector(".film-cards");
const clear = document.querySelector("#clear-films");

/* Event listening */
eventListeners();
function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    console.log(cardbody);
    cardbody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}

/**
 * If the title, director, and url fields are not empty, create a new film object, add it to the UI,
 * and add it to the storage.
 * @param e - The event object.
 */
function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        UI.displayMessages("Please fill all input area...", "danger");
    } else {
        const newFilm = new Film(title, director, url);

        UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage(newFilm);

        UI.displayMessages("Movie added...", "success");
    }

    UI.clearInputs(titleElement, directorElement, urlElement);
    e.preventDefault();
}

/**
 * If the target of the event is the delete button, delete the film from the UI and the storage, and
 * display a success message.
 * @param e - event
 */
function deleteFilm(e) {
    console.log(e);
    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.previousElementSibling.previousElementSibling.textContent);

        UI.displayMessages("Deleted successfully...", "success");
    }
}

/**
 * If the user confirms that they want to clear all films, then clear all films from the UI and clear
 * all films from storage.
 */
function clearAllFilms() {
    if (confirm("Are you sure?")) {
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
}
