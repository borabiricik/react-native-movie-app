import { toJS } from 'mobx'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react/cjs/react.development'
import { LikeStoreContext } from '../../Store/LikeStore'
import { MoviesStoreContext } from '../../Store/MoviesStore'
import MovieListItem from './MovieListItem'
import Search from './Search'

const MovieList = ({ navigation, data, type }) => {
    const movieStore = useContext(MoviesStoreContext)
    const likeStore = useContext(LikeStoreContext)

    const [likedMovies, setlikedMovies] = useState(toJS(likeStore.likedMovies))

    useEffect(() => {
        setlikedMovies(toJS(likeStore.likedMovies))
    }, [])



    return (
        <FlatList
            data={data}
            renderItem={(item) => (<MovieListItem navigation={navigation} movie={item} type={type} />)}
            ListHeaderComponent={Search}
            style={styles.moviesList}
        />
    )
}

export default MovieList

const styles = StyleSheet.create({
    moviesList: {
        backgroundColor: "black"
    }
})
