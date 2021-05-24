import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MovieList from '../Components/Movies/MovieList'
import { LikeStoreContext } from '../Store/LikeStore'
import { useIsFocused } from '@react-navigation/native';

const LikedMovies = ({ navigation }) => {

    const likeStore = useContext(LikeStoreContext)
    const [likedMovies, setlikedMovies] = useState(likeStore.getLikedMovies())

    const isFocused = useIsFocused()

    useEffect(async () => {
            await likeStore.setupMovies()
            setlikedMovies(likeStore.likedMovies)        
        

    }, [])

    return (
        
            isFocused ? <MovieList data={likedMovies} navigation={navigation} type={"LikedMovieDetails"} deleteType={"likedMovies"} /> : null
        
        

    )
}

export default observer(LikedMovies)

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    }
})
