import axios from "axios";
import { action, flow, makeObservable, observable, runInAction } from "mobx";
import { createContext } from "react";
import { API_ENDPOINT_MOVIES, API_KEY, API_LANGUAGE, API_ENDPOINT_SEARCH_MOVIES, API_ENDPOINT_GENRES } from "../Constants/API"


class MoviesStore {

    movies = []
    genres = []


    constructor() {
        makeObservable(this, {
            movies: observable,
            genres: observable,
            getMoviesFromAPI: action,
            getSearchedItem: action,
            getGenres: action
        })
    }

    getMoviesFromAPI = () => {
        axios.get(`${API_ENDPOINT_MOVIES}${API_KEY}${API_LANGUAGE}&page=1`)
            .then(response => response.data.results)
            .then(movies => runInAction(() => this.movies = movies))
            .catch((e) => {
                alert("Error while getting data from database.")
            })
    }

    getSearchedItem = (text) => {
        axios.get(`${API_ENDPOINT_SEARCH_MOVIES}${API_KEY}&query=${text}`)
            .then(response => response.data.results)
            .then(movies => runInAction(() => {
                this.movies = movies
            }))
    }

    getGenres = () => {
        axios.get(`${API_ENDPOINT_GENRES}${API_KEY}`)
            .then((response) => response.data.genres)
            .then(genres => runInAction(() => {
                this.genres = genres
            }))
    }



}

export const MoviesStoreContext = createContext(new MoviesStore())