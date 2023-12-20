import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "../App/Screens/SignupScreen";
import LoginScreen from "../App/Screens/LoginScreen";

const Stack = createNativeStackNavigator(); 

const NavigationScreens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationScreens;
