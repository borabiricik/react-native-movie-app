import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import GenresList from '../Components/Genres/GenresList'

const Genres = ({navigation}) => {
    return (
        <View style={styles.genresContainer}>
            <StatusBar backgroundColor="black" />
            <GenresList navigation={navigation} />
        </View>
    )
}

export default Genres

const styles = StyleSheet.create({
    genresContainer:{
        backgroundColor:"black",
        flex:1
    }
})
