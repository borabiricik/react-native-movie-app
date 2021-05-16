import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import MovieListItem from '../Components/Movies/MovieListItem'
import Search from '../Components/Movies/Search'
import { MoviesStoreContext } from '../Store/MoviesStore'



const Movies = observer(({navigation}) => {

    const moviesStore = useContext(MoviesStoreContext)

    useEffect(() => {
        moviesStore.getMoviesFromAPI()
        moviesStore.getGenres()      
    }, [])


    return (
        <View style={styles.moviesContainer}>
            <StatusBar backgroundColor="black" />
            <FlatList
                data={toJS(moviesStore.movies)}
                renderItem={(item)=>(<MovieListItem navigation={navigation} movie={item} />)}
                ListHeaderComponent={Search}
                style={styles.moviesList}
            />
        </View>
    )
})

export default Movies

const styles = StyleSheet.create({
    moviesContainer:{
        backgroundColor:"black"
    },
    moviesList:{
        backgroundColor:"black"
    }
})
