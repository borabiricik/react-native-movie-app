import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { API_ENDPOINT_PHOTO } from '../../Constants/API'
import { MoviesStoreContext } from '../../Store/MoviesStore';

const SimilarMovies = ({ movie, navigation }) => {

    const moviesStore = useContext(MoviesStoreContext)

    const item = movie

    useEffect(() => {
        moviesStore.getSimilarMovies(movie.id)

    }, [])

    const onPressSimilarMovie = (item) => {
        console.log(item)
        navigation.push("Details", { item })

        // console.log(toJS(moviesStore.similarMovies));

        // navigation.replace("Details", { item })
    }



    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.moviePosterContainer} onPress={() => onPressSimilarMovie(item)}>
            <Image
                source={{ uri: `${API_ENDPOINT_PHOTO}${item.poster_path}` }}
                style={styles.moviePoster}
            />
        </TouchableOpacity>

    )


    return (
        <View>
            <FlatList
                data={toJS(moviesStore.similarMovies)}
                renderItem={renderItem}
                numColumns={3}
                key={item => item.id}
                style={styles.similarMoviesList}

            />

        </View>


    )
}

export default observer(SimilarMovies)

const styles = StyleSheet.create({
    movieTitle: {
        color: "white",
        padding: 10
    },
    similarMoviesList: {
        height: Dimensions.get("screen").height / 3.1
    },
    moviePoster: {
        width: "100%",
        height: 200,
        borderRadius: 10
    },
    moviePosterContainer:
    {
        padding: 5,
        flex: 1,
    }
})
