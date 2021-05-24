import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import React, { useContext, useEffect, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { API_ENDPOINT_PHOTO } from '../../Constants/API'
import { LikeStoreContext } from '../../Store/LikeStore'
import { MoviesStoreContext } from '../../Store/MoviesStore'

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

const MovieListItem = ({ movie: { item, index }, navigation, listType, type,deleteType }) => {
    const moviesStore = useContext(MoviesStoreContext)

    const likeStore = useContext(LikeStoreContext)

    const [genres, setgenres] = useState(toJS(moviesStore.genres))

    // var filteredGenres = genres.find(genre => {
    //     return item.genre_ids.find(id => genre.id == id)
    // })

    const item_convert_to_js = toJS(item)

    const removeLikedMovie = () => {
        likeStore.removeLikedMovie(item.id)
    }


    const renderMovieDetails = () => {
        if (type == "LikedMovieDetails") {
            navigation.navigate("LikedMovieDetails", { item,navigation })
        }
        else{
            navigation.navigate("Details", { item })
        }
    }

    return (
        <TouchableOpacity onPress={renderMovieDetails} style={[styles.movieItemContainer, { backgroundColor: index % 2 === 0 ? "#141414" : "black" }]}>
            <View style={styles.container}>

                <Image
                    source={{ uri: `${API_ENDPOINT_PHOTO}${item.backdrop_path}` }}
                    style={styles.movieImage}
                />


                <View style={styles.movieInfoContainer}>
                    <Text style={styles.movieTitle} numberOfLines={1}>{item.title.length < 35 ? item.title : `${item.title.substring(0, 35)}...`}</Text>
                    <Text style={styles.voteAverage}>IMDB: {item.vote_average}</Text>
                    {
                        listType == "genreMovie" ?
                            <Text style={styles.genreText}>
                                Category

                        </Text>
                            : (
                                <Text style={styles.genreText}>
                                    {/* {
                                    filteredGenres.name ? filteredGenres.name : null
                                } */}
                                Category

                                </Text>
                            )
                    }
                </View>
            </View>


            <TouchableOpacity onPress={removeLikedMovie}>
                {
                    deleteType == "likedMovies" ? <Icon name="trash-outline" style={styles.removeIcon} on size={24} /> : null
                }
            </TouchableOpacity>


        </TouchableOpacity>
    )
}

export default observer(MovieListItem)

const styles = StyleSheet.create({
    movieItemContainer: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    container: {
        flexDirection: "row"
    },
    movieImage: {
        width: width / 8,
        height: height / 16,
        borderRadius: 50
    },
    movieInfoContainer: {
        flexDirection: "column",
        marginLeft: 10
    },
    movieTitle: {
        width: "100%",
        color: "white",
        fontFamily: "Lato-Bold"
    },
    movieInfoSpacer: {
        justifyContent: "space-between",
        flexDirection: "row"
    },
    genreText: {
        borderWidth: 1,
        textAlign: "center",
        width: width / 4,
        borderRadius: 6,
        paddingHorizontal: 10,
        borderColor: "#7f8c8d",
        color: "white"
    },
    voteAverage: {
        color: "white",
        fontFamily: "Lato-Light",
        paddingVertical: 5
    },
    removeIcon: {
        color: "red",
        zIndex: 100
    }
})
