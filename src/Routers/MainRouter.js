import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import Home from '../Screens/Home';
import Icon from "react-native-vector-icons/Ionicons"
import Movies from '../Screens/Movies';
import Genres from "../Screens/Genres"
import { MoviesStoreContext } from '../Store/MoviesStore';
import LikedMovies from '../Screens/LikedMovies';
import { toJS } from 'mobx';
import { LikeStoreContext } from '../Store/LikeStore';
import { observer } from 'mobx-react';
import AsyncStorage from '@react-native-async-storage/async-storage';



const MainTabStack = createMaterialBottomTabNavigator()

const MainRouter = () => {


    useEffect(()=>{
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

            <MainTabStack.Screen name="LikedMovies" component={LikedMovies} options={{
                tabBarColor: "black",
                tabBarLabel:"Liked Movies",
                tabBarIcon: ({ color }) => (
                    <Icon name="heart-outline" size={24} color={color} />
                )
            }} />

        </MainTabStack.Navigator>
    )
}

export default observer(MainRouter)

const styles = StyleSheet.create({

})
