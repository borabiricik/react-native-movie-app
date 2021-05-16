
import React from 'react'
import {  KeyboardAvoidingView, StatusBar, StyleSheet, Text,  View, } from 'react-native'
import LoginForm from '../Components/Login/LoginForm';

const Login = () => {



    return (
        <View style={styles.appContainer}>

        <StatusBar backgroundColor="#1562de"/>

            <View style={styles.blueBackground}></View>


            <View>
                <Text style={styles.logo}>The Movies App</Text>
                <Text style={styles.logoDescription}>Bora Biricik</Text>
            </View>

            <KeyboardAvoidingView>
            <View>
                <View style={styles.loginArea}>
                    <Text style={styles.loginAreaHeader}>Sign In</Text>
                    <Text style={styles.loginAreaDescription}>Login With Your The Movies Database Account</Text>
                    <LoginForm />

                </View>
            </View>
            </KeyboardAvoidingView>
            

            <View>
                <Text style={styles.noAccountText}>
                    No Account? 
                    <Text style={[styles.noAccountText,styles.noAccountBtn]}>
                         Sign In
                    </Text>
                </Text>
            </View>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-around",
    },
    blueBackground: {
        backgroundColor: "#1562de",
        position: "absolute",
        top: -250,
        left: -250,
        width: 750,
        height: 750,
        borderRadius: 375,
    },
    logo: {
        color: "white",
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold"
    },
    logoDescription: {
        textAlign: "center",
        color: "white"
    },
    loginArea: {
        backgroundColor: "white",
        paddingVertical: 40,
        paddingHorizontal: 30,
        marginHorizontal: 40,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 4,

    },
    loginAreaHeader: {
        fontWeight: "bold",
        fontSize: 30,

    },
    loginAreaDescription: {
        paddingVertical: 25,
        color: "#bbb"
    },
    noAccountText:{
        textAlign:"center"
    },
    noAccountBtn:{
        fontWeight:"700"
    }
})
