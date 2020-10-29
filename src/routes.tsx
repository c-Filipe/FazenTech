import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator} from '@react-navigation/stack';


import HomeScreen from './pages/HomeScreen';
import SignUp from './pages/SignUp';
import Index from './pages/Index';
import ReviewPurchase from './pages/ReviewPurchase';


const {Navigator, Screen} = createStackNavigator();




export default function Routes() {

    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' }}}>

                <Screen 
                   name="HomeScreen"
                   component={HomeScreen}
                />

                <Screen 
                   name="SignUp"
                   component={SignUp}
                   options={{
                    headerShown:true,
                    title:'Informe os dados'
                   }}
                   
                />

                <Screen 
                   name="Index"
                   component={Index}
                   
                />

                <Screen 
                   name="ReviewPurchase"
                   component={ReviewPurchase}
                   options={{
                    headerShown:true,
                    title:'Revisar comprar'
                   }}
                />
                
            </Navigator>
        </NavigationContainer>
    )

}