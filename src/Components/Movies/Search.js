import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { MoviesStoreContext } from '../../Store/MoviesStore'

const Search = () => {
    const movieStore = useContext(MoviesStoreContext)

    const [searchText, onChangeText] = useState("")

    return (
        <View style={styles.searchbarContainer}>
            <TextInput
                style={styles.searchbar}
                value={searchText}
                placeholder="Search..."
                placeholderTextColor={"white"}
                onChangeText={(value) => {
                    onChangeText(value)

                    if(!value.length==0)
                    {
                        movieStore.getSearchedItem(value)
                    }
                    else if(value.length==0)
                    {                        
                        movieStore.getMoviesFromAPI()
                    }
                    
                }}
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchbar: {
        backgroundColor: "transparent",
        marginVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        color: "white",
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "#fafafa",
        fontSize: 16
    },
    searchbarContainer:{
        backgroundColor:"black"
    }
})
