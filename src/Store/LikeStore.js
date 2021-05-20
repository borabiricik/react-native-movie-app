import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { action, makeAutoObservable, makeObservable, observable, runInAction, toJS } from "mobx";
import { createContext } from "react";
import { API_ENDPOINT_MOVIE_DETAILS_BY_ID, API_KEY } from "../Constants/API";


class LikeStore {
    likedMovies = []

    constructor() {
        // makeObservable(this, {
        //     likedMovies: observable,
        //     likeMovie: action,
        //     setupMovies: action
        // })
        makeAutoObservable(this)
    }


    likeMovie = (movie_id) => {
        axios.get(`${API_ENDPOINT_MOVIE_DETAILS_BY_ID}${movie_id}?${API_KEY}`)
            .then(response => response.data)
            .then(async data => {

                if (!this.likedMovies.find(movie => movie.id == movie_id)) {
                    runInAction(() => {
                        this.likedMovies.push(data)
                    })
                    await AsyncStorage.setItem("@likedMovies", JSON.stringify(toJS(this.likedMovies)));
                }

                else {
                    alert("this movie liked before")
                }

            })
    }

    setupMovies = async () => {
        await runInAction(async () => {
            this.likedMovies = await AsyncStorage.getItem("@likedMovies").then(data => JSON.parse(data))
        })
    }

    getLikedMovies = async () => {
        const movies = await AsyncStorage.getItem("@likedMovies").then(data => JSON.parse(data))
        return movies
    }



}

export const LikeStoreContext = createContext(new LikeStore())