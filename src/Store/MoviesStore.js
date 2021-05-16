import axios from "axios";
import { action, flow, makeObservable, observable, runInAction } from "mobx";
import { createContext } from "react";
import { API_ENDPOINT_MOVIES, API_KEY, API_LANGUAGE, API_ENDPOINT_SEARCH_MOVIES, API_ENDPOINT_GENRES, API_ENDPOINT_SIMILAR } from "../Constants/API"


class MoviesStore {

    movies = []
    genres = []
    similarMovies = []


    constructor() {
        makeObservable(this, {
            movies: observable,
            genres: observable,
            similarMovies:observable,
            getMoviesFromAPI: action,
            getSearchedItem: action,
            getGenres: action,
            getSimilarMovies: action
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

    getSimilarMovies = (movie_id) => {
        axios.get(`${API_ENDPOINT_SIMILAR}${movie_id}/similar?${API_KEY}&page=1`)
            .then(response => runInAction(() => {
                this.similarMovies = response.data.results
            }))
    }



}

export const MoviesStoreContext = createContext(new MoviesStore())