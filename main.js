import Expo, { Constants } from "expo";
import React from "react";
import { StyleSheet, Text, View, Platform, Dimensions } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";

// import { Provider } from 'react-redux';
// import storeRedux from './redux/store'

import AuthScreen from "./src/screens/AuthScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

import PatientScreen from "./src/screens/PatientScreen";
import NutritionOrderScreen from "./src/screens/NutritionOrderScreen";

class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator(
      {
        auth: { screen: AuthScreen },
        welcome: { screen: WelcomeScreen },
        main: {
          screen: TabNavigator({
            patient: { screen: PatientScreen },
            nutritionOrder: { screen: NutritionOrderScreen }
          })
        }
      },
      {
        tabBarOptions: {
          activeTintColor: Platform.OS === "ios" ? "#e91e63" : "#fff"
        }
      },
      {
        lazy: true
      }
    );

    return (
      //<Provider store={storeRedux}>
      <MainNavigator style={styles.container} />
      //</Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 20 : 0,
    width: Dimensions.get("window").width
  }
});

Expo.registerRootComponent(App);
