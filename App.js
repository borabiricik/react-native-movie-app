import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import 'react-native-gesture-handler';
import DetailsModalRouter from './src/Routers/DetailsModalRouter';
import { LoginStoreContext } from './src/Store/LoginStore';

const App = () => {

  const loginStore = useContext(LoginStoreContext)

  loginStore.checkLoggedIn()

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <DetailsModalRouter />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1
  }
});

export default App;
