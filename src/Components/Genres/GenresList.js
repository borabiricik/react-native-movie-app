import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { MoviesStoreContext } from '../../Store/MoviesStore'
import GenresListItem from './GenresListItem'

const GenresList = ({navigation}) => {

    const movieStore = useContext(MoviesStoreContext)

    useEffect(() => {
       movieStore.getGenres()
    }, [])

   

    return (
        <FlatList 
            data={toJS(movieStore.genres)}
            renderItem={(genre)=><GenresListItem genre={genre} navigation={navigation} />}
        />
    )
}

export default observer(GenresList)

const styles = StyleSheet.create({})
