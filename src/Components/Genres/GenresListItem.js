import { toJS } from 'mobx'
import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const GenresListItem = ({ genre: { item }, navigation }) => {   
    const handlelistMoviesForGenre = () => {
        navigation.navigate("GenreDetails",{item})
    }

    

    return (
        <TouchableOpacity onPress={handlelistMoviesForGenre} style={styles.genresItemContainer}>
            <Text style={styles.genreTitle}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default GenresListItem

const styles = StyleSheet.create({
    genresItemContainer: {
        padding: 10
    },
    genreTitle: {
        textAlign: "center",
        color: "white",
        borderBottomColor: "#5f5f5f",
        borderBottomWidth: 1,
        padding: 10
    }
})
