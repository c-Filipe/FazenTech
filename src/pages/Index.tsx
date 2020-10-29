import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TextInput, ScrollView, TouchableOpacity, RefreshControlBase, RefreshControl } from 'react-native'
import { Feather } from '@expo/vector-icons'

import logo from  '../images/logo.png';

import couveFlor from  '../images/couve-flor.png'
import ovos from '../images/ovos.png';
import brocolis from  '../images/brocolis.png';
import cenoura from  '../images/cenoura.png';
import tomate from  '../images/tomate.png';
import salsa from  '../images/salsa.png';
import { useNavigation } from '@react-navigation/native';





export default function SignUp(){

    const navigation = useNavigation();
    
    const ReviewPurchase = () => {
        navigation.navigate('ReviewPurchase');
    };

    return(

        
        <View style={styles.container}>
           
            
            <ScrollView> 

               

            <Image
                source={logo}
                style={styles.logo}
            />
              <TextInput
                
                style={styles.search}
                keyboardType='ascii-capable'
                placeholder={'Pesquisar Produto'} 
                
            />
            <Feather
                name='search'
                size={20} 
                color='#433ded'
                style={styles.iconSearch} 
                    
            /> 

            

            <View style={styles.products}>
                


                <Text style = {styles.TextProducts} > Couve-flor{'\n'} Unidade </Text>
                <Image
                    source={couveFlor}
                    style={styles.productsImage}
                />
                <Text style = {styles.TextProducts} > R$ 7,00 </Text> 

                <Feather name='shopping-cart' size={20} color='#433ded' />
                <Feather
                    name='minus'
                    size={20} 
                    color='#fff' 
                    style={{backgroundColor:'#433ded' , borderRadius:10}}
                />
                <TextInput
                
                    style={styles.input}
                    keyboardType='numeric'
                    placeholder="0"

                    
                    
                />

                <Feather
                    name='plus'
                    size={20} 
                    color='#fff' 
                    style={{backgroundColor:'#433ded' , borderRadius:10}}
                      
                />
            </View>
            
            <View style = {styles.lineStyle} />

            <View style={styles.products}>
                <Text style = {styles.TextProducts} > Ovos Caipira {'\n'} bandeja com {'\n'}10 unidades </Text>

                <Image
                    source={ovos}
                    style={styles.productsImage}
                />

                <Text style = {styles.TextProducts} > R$ 8,00  </Text>
                <Feather name='shopping-cart' size={20} color='#433ded' />
                <Feather
                    name='minus'
                    size={20} 
                    color='#fff' 
                    style={{backgroundColor:'#433ded' , borderRadius:10}}
                />
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    keyboardType='numeric'
                />
                  <Feather 
                    name='plus' 
                    size={20} 
                    color='#fff' 
                    style={{backgroundColor:'#433ded', borderRadius:10}} 
                  /> 
            </View>

            <View style = {styles.lineStyle} />

            <View style={styles.products}>
                <Text style = {styles.TextProducts} > Cenoura {'\n'}Orgânica {'\n'} Maço  </Text>
                <Image
                    source={cenoura}
                    style={styles.productsImage}
                />
                <Text style = {styles.TextProducts} > R$ 4,50  </Text>
                <Feather name='shopping-cart' size={20} color='#433ded' />
                <Feather
                    name='minus'
                    size={20} 
                    color='#fff' 
                    style={{backgroundColor:'#433ded' , borderRadius:10}}
                />
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    keyboardType='numeric'
                />
                <Feather
                    name='plus'
                    size={20}
                    color='#fff'
                    style={{backgroundColor:'#433ded', borderRadius:10}}
                />
            </View>

            <View style = {styles.lineStyle} />

            <View style={styles.products}>
                <Text style = {styles.TextProducts} > Tomate Cereja{'\n'} bandeja com {'\n'}250g </Text>
                <Image
                    source={tomate}
                    style={styles.productsImage}
                />
                <Text style = {styles.TextProducts} > R$ 5,00  </Text>
                <Feather name='shopping-cart' size={20} color='#433ded' />
                <Feather
                    name='minus'
                    size={20} 
                    color='#fff' 
                    style={{backgroundColor:'#433ded' , borderRadius:10}}
                />
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    keyboardType='numeric'
                />
                <Feather
                    name='plus'
                    size={20} 
                    color='#fff' 
                    style={{backgroundColor:'#433ded', borderRadius:10}}
                />
            </View>

            <View style = {styles.lineStyle} />

            <View style={styles.products}>
                <Text style = {styles.TextProducts} > Salsa Orgânica {'\n'} maço </Text>
                <Image
                    source={salsa}
                    style={styles.productsImage}
                />
                <Text style = {styles.TextProducts} > R$ 2,00  </Text>
                <Feather name='shopping-cart' size={20} color='#433ded' />
                <Feather
                    name='minus'
                    size={20} 
                    color='#fff' 
                    style={{backgroundColor:'#433ded' , borderRadius:10}}
                />
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    keyboardType='numeric'
                />
                <Feather
                    name='plus' 
                    size={20}
                    color='#fff'
                    style={{backgroundColor:'#433ded', borderRadius:10}} 
                />
            </View>

            <View style = {styles.lineStyle} />

            <View style={styles.products}>
                <Text style = {styles.TextProducts}> Brócolis Ninja {'\n'} unidade </Text>
                <Image
                    source={brocolis}
                    style={styles.productsImage}
                />
                <Text style = {styles.TextProducts}> R$ 5,00  </Text>

                <Feather name='shopping-cart' size={20} color='#433ded' /><Feather
                    name='minus'
                    size={20} 
                    color='#fff' 
                    style={{backgroundColor:'#433ded' , borderRadius:10}}
                />
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    keyboardType='numeric'
                />
                <Feather
                    name='plus'
                    size={20} 
                    color='#fff' 
                    style={{backgroundColor:'#433ded', borderRadius:10}}
                />
            </View>

            <View style = {styles.lineStyle} />

            </ScrollView>
            
            <TouchableOpacity style={styles.button} onPress={ReviewPurchase}>
                <Text style={styles.buttunText}> Comprar </Text>
            </TouchableOpacity> 
        </View>


    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
       
        fontSize:19,
        
       
    },
    search:{
        width:320,
        height:33,
        marginHorizontal: 20,
        backgroundColor: '#dadae5',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 16,
        

    },

    iconSearch:{
        marginTop:-27,
        marginHorizontal: 24,

        
        // resizeMode : 'stretch',

    },

    products:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,
        alignItems: 'center',
        
        
    },

    productsImage:{
        width: 90,
        height: 90
    },

    TextProducts:{
        fontSize: 13,
        padding:2
    },

    lineStyle:{
        borderWidth: 0.2,
        borderColor:'black',
        margin:5,
        
        
   },

   logo:{
        borderRadius:100,
        marginTop:15
    },

    input:{
        width:40,
        height:25,
       
        backgroundColor: '#dadae5',
        borderRadius: 8,
        textAlign: 'center',
      
    },

    button:{
       width:240,
        height:42,
        
        backgroundColor: '#44c427',
        borderRadius: 10,
        marginHorizontal: 60,

        
        alignItems:'center',
        justifyContent:'center'


    },

    buttunText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'

    },

 });
   



    