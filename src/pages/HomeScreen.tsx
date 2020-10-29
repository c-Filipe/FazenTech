import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';

import {RectButton} from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native'; 

import vegetablesBackgroundImage from '../images/vegetable.jpg';
import logo from  '../images/logo.png';



export default function HomeScreen(){

    const navigation = useNavigation();


    const signUp = () => {
        navigation.navigate('SignUp');
    };

    const index = () => {
        navigation.navigate('Index');
    }

    
    return (
        <ImageBackground
         source={vegetablesBackgroundImage} 
         style={styles.container}
         resizeMode= "stretch"
        >
            <Image
                source={logo}
                style={styles.logo}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite seu E-mail"
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Digite sua senha"
            />

            <TouchableOpacity 
                style={styles.button}
                onPress={index}
            >
                <Text style={styles.buttunText}> ENTRAR </Text>

            </TouchableOpacity>

            <Text style={styles.info}>Ainda não possui uma conta ?</Text>    
            <RectButton
                style={styles.createSignUpButton}
                onPress={signUp}
            >
            <Text style={styles.textSignUpButton} > CADASTRE-SE </Text>      
            </RectButton>
                

            
        </ImageBackground>
   
            
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height: '100%',
        
        

    },
    input:{
        width: 300,
        height:50,
        backgroundColor: '#cecece',
        marginTop:10,
        borderRadius:20,
        fontSize:16,
        padding:10,
    },

    button:{
        width:300,
        height:42,
        marginTop: 5,
        backgroundColor: '#008CBA',
        borderRadius: 10,
        padding:10,
        alignItems:'center',
        justifyContent:'center'

    },

    buttunText:{
        fontSize:16,
        fontWeight:'bold'

    },
    

    createSignUpButton:{
        backgroundColor: '#f77c18',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width:200,
        marginTop: 3,
        
    },

    textSignUpButton:{
        color: '#fff',
        fontSize:19,
        fontWeight:'bold',
        

    },
    logo:{
        borderRadius:100,
        marginTop: -80
        
    },

    info:{
        marginTop: 32,
        fontSize: 20,
        color: '#36A420',
        fontWeight:'bold'
        
    }
    


})