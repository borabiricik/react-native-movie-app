import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import React, { useContext, useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { API_ENDPOINT_PHOTO } from '../../Constants/API'
import { MoviesStoreContext } from '../../Store/MoviesStore';

const SimilarMovies = ({ movie }) => {

    const moviesStore = useContext(MoviesStoreContext)



    useEffect(() => {
        moviesStore.getSimilarMovies(movie.id)

    }, [])



    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.moviePosterContainer}>
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
    similarMoviesList:{
        height:Dimensions.get("screen").height/3.1
    },
    moviePoster: {
        width:"100%",
        height: 200,
        borderRadius:10
    },
    moviePosterContainer:
    {
        padding:5,
        flex: 1,
    }
})
