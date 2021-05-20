import { observer } from 'mobx-react'
import React, { useContext, useEffect, useState } from 'react'
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
import { LoginStoreContext } from '../Store/LoginStore'

const Home = () => {
    const loginStore = useContext(LoginStoreContext)


    useEffect(() => {
        
    }, [])

    return (
        <View style={styles.homeContainer}>
            <StatusBar backgroundColor="#3498db" />
            <View>
               <Text  style={{color:"white"}}>
               {/* Hoşgeldin {loginStore.username} */}
               </Text>
            </View>
            <Text>
                <Button title="logout" onPress={()=>{
                    loginStore.logOut()
                }} />
            </Text>
        </View>
    )
}

export default observer(Home)

const styles = StyleSheet.create({
    homeContainer:{
        flex:1,
        backgroundColor:"black"
    }
})
