import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useContext } from 'react'
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
import { LoginStoreContext } from '../Store/LoginStore'

const Home = () => {
    const loginStore = useContext(LoginStoreContext)


    return (
        <View>
            <StatusBar backgroundColor="#3498db" />
            <Text>
                <Button title="logout" onPress={()=>{
                    loginStore.logOut()
                }} />
            </Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
