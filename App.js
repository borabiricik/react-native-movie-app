import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import 'react-native-gesture-handler';
import MainRouter from './src/Routers.js/MainRouter';


const App = () => {


  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MainRouter />
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
