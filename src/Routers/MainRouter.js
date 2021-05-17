import React, { useContext, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import Home from '../Screens/Home';
import Icon from "react-native-vector-icons/Ionicons"
import Movies from '../Screens/Movies';
import Genres from "../Screens/Genres"
import { MoviesStoreContext } from '../Store/MoviesStore';



const MainTabStack = createMaterialBottomTabNavigator()

const MainRouter = () => {

    const moviesStore = useContext(MoviesStoreContext)

    useEffect(()=>{
        moviesStore.getMoviesFromAPI()
    },[])

    return (
        <MainTabStack.Navigator initialRouteName="Home" shifting={true} screenOptions={{
            
        }} >

            <MainTabStack.Screen name="Home" component={Home} options={{
                tabBarColor: "#3498db",
                tabBarIcon: ({ color }) => (
                    <Icon name="home-outline" size={24} color={color} />
                )
            }} />

            <MainTabStack.Screen name="Movies" component={Movies} options={{
                tabBarColor: "#e74c3c",
                tabBarIcon: ({ color }) => (
                    <Icon name="film-outline" size={24} color={color} />
                )
            }} />

            <MainTabStack.Screen name="Genres" component={Genres} options={{
                tabBarColor: "#2ecc71",
                tabBarIcon: ({ color }) => (
                    <Icon name="list-outline" size={24} color={color} />
                )
            }} />

        </MainTabStack.Navigator>
    )
}

export default MainRouter

const styles = StyleSheet.create({

})
