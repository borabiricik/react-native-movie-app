import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
import Details from '../Screens/Details';
import MainRouter from './MainRouter';
import Login from '../Screens/Login';
import { LoginStoreContext } from '../Store/LoginStore';
import { observer } from 'mobx-react';
import GenreDetails from '../Screens/GenreDetails';
import { color } from 'react-native-reanimated';

const rootStack = createStackNavigator();

const DetailsModalRouter = observer(() => {

    const loginStore = useContext(LoginStoreContext)



    return (
        <rootStack.Navigator mode="card" screenOptions={{ headerShown: false,gestureEnabled:true,gestureDirection:"horizontal", cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS }}>

            {
                loginStore.isLoggedIn ? (
                    <>
                        <rootStack.Screen name="MainStack" component={MainRouter} />
                        <rootStack.Screen name="Details" component={Details} />
                        <rootStack.Screen name="GenreDetails" component={GenreDetails} options={{ headerShown: true,headerTintColor:"white",headerStyle:{backgroundColor:"black"}}} />
                    </>
                )
                    : <rootStack.Screen name="Login" component={Login} />
            }





        </rootStack.Navigator>
    )
})

export default DetailsModalRouter

const styles = StyleSheet.create({})
