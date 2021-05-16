import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import Details from '../Screens/Details';
import MainRouter from './MainRouter';
import Login from '../Screens/Login';
import { LoginStoreContext } from '../Store/LoginStore';
import { observer } from 'mobx-react';

const rootStack = createStackNavigator();

const DetailsModalRouter = observer(() => {

    const loginStore = useContext(LoginStoreContext)
    
    

    return (
        <rootStack.Navigator mode="modal" initialRouteName={"Home"} screenOptions={{ headerShown: false }}>

            {
                loginStore.isLoggedIn ? (
                    <>
                        <rootStack.Screen name="MainStack" component={MainRouter} />
                        <rootStack.Screen name="Details" component={Details} />
                    </>
                )
                    : <rootStack.Screen name="Login" component={Login} />
            }





        </rootStack.Navigator>
    )
})

export default DetailsModalRouter

const styles = StyleSheet.create({})
