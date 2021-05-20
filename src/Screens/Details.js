import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import React, { useContext, useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import SimilarMovies from '../Components/Movies/SimilarMovies'
import { API_ENDPOINT_PHOTO } from '../Constants/API'
import { LikeStoreContext } from '../Store/LikeStore'
import { MoviesStoreContext } from '../Store/MoviesStore'

const Details = ({ route: { params: { item } } }) => {

    const moviesStore = useContext(MoviesStoreContext)
    const likeStore = useContext(LikeStoreContext)

    const [genres, setgenres] = useState(toJS(moviesStore.genres))
    const [iconColor, seticonColor] = useState("black")


    var filteredGenres = genres.find(genre => {
        return item.genre_ids.find(id => genre.id == id)
    })

    const likeButtonPress = () => {
        if (toJS(likeStore.likedMovies).find(movie => movie.id == item.id)) {
            seticonColor("red")
        }
        likeStore.likeMovie(item.id)

    }

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

            <View>
                <TouchableOpacity style={styles.likeButton} onPress={likeButtonPress}>
                    <Icon name={"heart-outline"} size={24} color={`${iconColor}`} />
                    <Text style={styles.likeText}>
                        Like
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.movieInfoContainer}>
                <Text style={styles.movieText}>IMBD: {item.vote_average}</Text>
                <Text style={styles.movieText}>Genre: {filteredGenres.name ? filteredGenres.name : null}</Text>
            </View>

            <View style={styles.similarMoviesContainer}>
                <Text style={styles.movieText}>Similar Movies: </Text>
                <SimilarMovies movie={item} />
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
    },
    likeButton: {
        backgroundColor: "white",
        width: "30%",
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        borderRadius: 7,
        marginTop: 10
    },
    likeText: {
        marginLeft: 10,
        fontFamily: "Lato-Black",
    }

})
