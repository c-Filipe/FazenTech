import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity,ImageBackground, Image} from 'react-native'

import woodBackgroundImage from  '../images/wood.jpg';

import logo from  '../images/logo.png';
import { useNavigation } from '@react-navigation/native';

export default function SignUp(){

    const navigation = useNavigation();

    function createHandler(){  
        navigation.navigate('HomeScreen');     
        return alert('Cadastro Realizado com sucesso.');
  
    }
    return(
        <ImageBackground
            source={woodBackgroundImage}
            style={styles.container}
            resizeMode= "stretch"
        >
            <Image
                source={logo}
                style={styles.logo}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
            />

            <TextInput
                style={styles.input}
                placeholder="Digite seu E-mail"
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Escolha sua senha"
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttunText} onPress={createHandler}> CADASTRAR </Text>
            </TouchableOpacity>

        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,

        justifyContent: 'center',
        alignItems: 'center',
        
    },
    input:{
        width: 300,
        height:50,
        backgroundColor: '#91837A',
        marginTop:10,
        borderRadius:20,
        fontSize:16,
        padding:10,
    },

    button:{
        width:300,
        height:42,
        marginTop:15,
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

    logo:{
        borderRadius:100
    }


})
    