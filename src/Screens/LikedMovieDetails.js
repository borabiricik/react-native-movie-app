import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import React, { useContext, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import SimilarMovies from '../Components/Movies/SimilarMovies'
import { API_ENDPOINT_PHOTO } from '../Constants/API'
import { LikeStoreContext } from '../Store/LikeStore'
import { MoviesStoreContext } from '../Store/MoviesStore'

const LikedMovieDetails = ({ route: { params: { item } }, navigation }) => {

    const moviesStore = useContext(MoviesStoreContext)
    const likeStore = useContext(LikeStoreContext)

    const [genres, setgenres] = useState(toJS(moviesStore.genres))
    const [iconColor, seticonColor] = useState("black")

    useEffect(async () => {
        await moviesStore.getGenres()
        if (likeStore.likedMovies.find(movie => movie.id == item.id)) {
            seticonColor("red")
        }
    }, [])


    var filteredGenres = genres.find(genre => {
        return toJS(item).genres.find(id => genre.id == id)
    })



    const likeButtonPress = async () => {
        await likeStore.likeMovie(item.id)
        seticonColor("red")

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
                    <Icon name={"heart-outline"} size={24} color={iconColor} />
                    <Text style={styles.likeText}>
                        Like
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.movieInfoContainer}>
                <Text style={styles.movieText}>IMBD: {item.vote_average}</Text>
                <View style={styles.genreContainer}>
                    {
                        toJS(item).genres.map((genre) => {
                            return (
                                <Text key={genre.id} style={[styles.movieText, styles.genreText]}>{genre.name}</Text>
                            )
                        })
                    }
                </View>
            </View>

            <View style={styles.similarMoviesContainer}>
                <Text style={styles.movieText}>Similar Movies: </Text>
                <SimilarMovies movie={item} navigation={navigation} />
            </View>

        </View>
    )
}

export default observer(LikedMovieDetails)

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
        height: 200
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
    },
    genreText: {
        padding: 5,
        borderWidth: 1,
        borderColor: "white",
        textAlign: "center",
        marginBottom: 5,
        width: "30%",
        borderRadius: 5
    },
    genreContainer: {
        marginTop: 5,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    }

})
