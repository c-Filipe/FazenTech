import React from 'react';
import {useFonts} from 'expo-font';
import { Lemonada_600SemiBold } from '@expo-google-fonts/lemonada';


import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
  Lemonada_600SemiBold
 });
 
 if (!fontsLoaded) {
   return null;
 }
  return (
   <Routes />
  );
}

