import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import React, { useContext, useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import SimilarMovies from '../Components/Movies/SimilarMovies'
import { API_ENDPOINT_PHOTO } from '../Constants/API'
import { MoviesStoreContext } from '../Store/MoviesStore'

const Details = ({ route: { params: { item } } }) => {

    const moviesStore = useContext(MoviesStoreContext)

    const [genres, setgenres] = useState(toJS(moviesStore.genres))
    

    var filteredGenres = genres.find(genre => {
        return item.genre_ids.find(id => genre.id == id)
    })

   


    return (
        <View style={styles.detailsContainer}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: `${API_ENDPOINT_PHOTO}${item.poster_path}` }}
                    style={styles.detailsMoviePoster}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.movieInfoTop}>
                <Text style={[styles.movieText, styles.movieTitle]}>{item.title}</Text>
                <Text style={[styles.movieText, styles.movieOverview]}>{item.overview}</Text>

            </View>

            <View style={styles.movieInfoContainer}>
                <Text style={styles.movieText}>IMBD: {item.vote_average}</Text>
                <Text style={styles.movieText}>Genre: {filteredGenres.name ? filteredGenres.name : null}</Text>
            </View>

            <View style={styles.similarMoviesContainer}>
                <Text style={styles.movieText}>Similar Movies: </Text>
                <SimilarMovies movie={item}/>
            </View>

        </View>
    )
}

export default observer(Details)

const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1,
        backgroundColor: "black",
        padding: 20
    },
    imageContainer: {
        alignItems: "center"
    },
    detailsMoviePoster: {
        width: "100%",
        height: 300
    },
    movieInfoContainer: {
        paddingTop: 20
    },
    movieText: {
        color: "white",
        fontFamily: "Lato-Black"
    },
    movieTitle: {
        textAlign: "center",
        padding: 10,
        fontSize: 24,
        color: "#afafaf",
        fontFamily: "Lato-Bold"
    },
    movieOverview: {
        fontFamily: "Lato-Light"
    },
    similarMoviesContainer: {
        marginTop: 30,
    }

})
