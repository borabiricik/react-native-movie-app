import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import React, { useContext, useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import MovieListItem from '../Components/Movies/MovieListItem'
import { MoviesStoreContext } from '../Store/MoviesStore'


const GenreDetails = ({ route: { params: { item } }, navigation }) => {


    const moviesStore = useContext(MoviesStoreContext)
    const [genres, setgenres] = useState(toJS(moviesStore.genres))



    useEffect( () => {
        moviesStore.getMoviesForGenre(item.id)
    },[])


    return (
        <View>
            <FlatList
                data={toJS(moviesStore.moviesForGenre)}
                renderItem={(item) => (<MovieListItem navigation={navigation} movie={item} type={"genreMovie"} />)}
            />
        </View>
    )
}


export default observer(GenreDetails)

const styles = StyleSheet.create({})
