import React, { ReactElement } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { UserScreen, HomeScreen } from "./src/screens";
import { store } from "./index";

const Stack = createNativeStackNavigator();

// TODO write README
// TODO add drawer for editing
// TODO translate page

const App = (): ReactElement => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="User" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
