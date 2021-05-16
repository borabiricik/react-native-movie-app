import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import MovieListItem from '../Components/Movies/MovieListItem'
import Search from '../Components/Movies/Search'
import { MoviesStoreContext } from '../Store/MoviesStore'



const Movies = observer(() => {

    const moviesStore = useContext(MoviesStoreContext)

    useEffect(() => {
        moviesStore.getMoviesFromAPI()
        moviesStore.getGenres()      
    }, [])


    return (
        <View>
            <FlatList
                data={toJS(moviesStore.movies)}
                renderItem={(item)=>(<MovieListItem movie={item} />)}
                ListHeaderComponent={Search}
            />
        </View>
    )
})

export default Movies

const styles = StyleSheet.create({})
