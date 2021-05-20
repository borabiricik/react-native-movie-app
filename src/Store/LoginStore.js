import { action, makeObservable, observable, runInAction, toJS } from "mobx"
import { createContext } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { API_ENDPOINT_LOGIN_WITH_TOKEN, API_ENDPOINT_REQUEST_TOKEN, API_KEY } from "../Constants/API"


class LoginStore {

    token = null
    isLoggedIn = null
    username = null

    constructor() {
        makeObservable(this, {
            token: observable,
            username: observable,
            getToken: action,
            loginWithToken: action,
            isLoggedIn: observable,
            storeUsernameInfo: action,
            getUsername: action

        })
    }

    getToken = async () => {
        const data = await axios.get(`${API_ENDPOINT_REQUEST_TOKEN}${API_KEY}`)
            .then(response => response.data)

        this.setToken(data.request_token)

    }

    setToken = async (token) => {
        await AsyncStorage.setItem("@token", token)
    }


    exportToken = async () => {

        return (
            await this.getToken(),
            await AsyncStorage.getItem("@token")
        )


    }

    loginWithToken = async (username, password) => {
        const data = axios.post(`${API_ENDPOINT_LOGIN_WITH_TOKEN}${API_KEY}&username=${username}&password=${password}&request_token=${await this.exportToken()}`)
            .then(response => this.checkLoggedIn())
            .catch(e => alert("Error while login"))

        this.storeUsernameInfo(username)
    }

    storeUsernameInfo = async (username) => {
        await AsyncStorage.setItem("@username", username)
        runInAction(()=>{
            this.username = username
        })
    }

    getUsername = () => {
        return AsyncStorage.getItem("@username")
    }

    checkLoggedIn = async () => {
        if (await AsyncStorage.getItem("@token")) {
            runInAction(async () => {
                this.isLoggedIn = true,
                this.username= await AsyncStorage.getItem("@username")
            })
            
            
        }
        else {
            runInAction(() => {
                this.isLoggedIn = false
            })
        }
    }

    logOut = async () => {
        await AsyncStorage.removeItem("@token")
        this.checkLoggedIn()
    }

}

export const LoginStoreContext = createContext(new LoginStore())