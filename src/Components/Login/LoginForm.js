import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { LoginStoreContext } from '../../Store/LoginStore'

const LoginForm = () => {


    const loginStore = useContext(LoginStoreContext)

    const [mail, setmail] = useState("")
    const [password, setpassword] = useState("")
    
    const register = () => {

    }

    const login = async () => {
        loginStore.loginWithToken(mail, password)
    }


    return (
        <View style={styles.signInContainer}>

            <TextInput
                value={mail}
                placeholder="Username"
                style={styles.Input}
                autoCapitalize="none"
                placeholderTextColor="black"
                onChangeText={(value) => {
                    setmail(value)
                }}
            />

            <TextInput
                value={password}
                placeholder="Password"
                placeholderTextColor="black"
                style={styles.Input}
                autoCapitalize="none"
                secureTextEntry
                onChangeText={(value) => {
                    setpassword(value)
                }}
            />

            <TouchableOpacity onPress={login} style={styles.signInButton}>
                <Text style={styles.buttonText}>
                    Sign In Now
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({

    signInText: {
        fontSize: 24,
        color: "#aaa",
        fontWeight: "700"
    },
    Input: {
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 35,
        color: "black",
        marginBottom: 10
    },
    signInButton: {
        backgroundColor: "#1562de",
        marginVertical: 20,
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontSize: 20,

    }
})
