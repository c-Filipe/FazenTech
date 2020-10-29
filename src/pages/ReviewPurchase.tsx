import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, ScrollView, TouchableOpacity, RefreshControlBase, RefreshControl } from 'react-native'
import { Feather } from '@expo/vector-icons'

import logo from  '../images/logo.png';

import couveFlor from  '../images/couve-flor.png'
import ovos from '../images/ovos.png';
import brocolis from  '../images/brocolis.png';
import tomate from  '../images/tomate.png';
import { useNavigation } from '@react-navigation/native';





export default function ReviewPurchase(){

    const navigation = useNavigation();
    
    
    function buyHandler(){  
        navigation.navigate('Index');      
        return alert('Compra Realizada com sucesso.');
  
    }

    return(

        
        <View style={styles.container}>
           
            
            <ScrollView> 

               

            <Image
                source={logo}
                style={styles.logo}
            />
              
            
            <View style={styles.products}>
                


                <Text style = {styles.TextProducts} > Couve-flor{'\n'} Unidade </Text>
                <Image
                    source={couveFlor}
                    style={styles.productsImage}
                />
               

                <Feather name='shopping-cart' size={20} color='#433ded' />
                
                <TextInput
                
                    style={styles.input}
                    keyboardType='numeric'
                    value=" Qtd 1"
  
                    
                />
                 <Text style = {styles.TextProducts} >  R$ 7,00 </Text> 
                
            </View>
            
            <View style = {styles.lineStyle} />

            <View style={styles.products}>
                <Text style = {styles.TextProducts} > Ovos Caipira {'\n'} bandeja com {'\n'}10 unidades </Text>

                <Image
                    source={ovos}
                    style={styles.productsImage}
                />

                
                <Feather name='shopping-cart' size={20} color='#433ded' />
                
                <TextInput
                    style={styles.input}
                    value="Qtd 2"
                    keyboardType='numeric'
                />
                <Text style = {styles.TextProducts} >  R$ 16,00  </Text>
                  
            </View>


            <View style = {styles.lineStyle} />


            <View style={styles.products}>
                <Text style = {styles.TextProducts}> Brócolis Ninja {'\n'} unidade </Text>
                <Image
                    source={brocolis}
                    style={styles.productsImage}
                />
                

                <Feather name='shopping-cart' size={20} color='#433ded' />
                
                <TextInput
                    style={styles.input}
                    value="Qtd 1"
                    keyboardType='numeric'
                />
                <Text style = {styles.TextProducts}> R$ 5,00  </Text>
                
            </View>

            <View style = {styles.lineStyle} />
            
            <View style = {styles.totalPurchase}>
                <Text style = {styles.ButtontalPurchase}> Valor total da compra R$ 28,00  </Text>
            </View>
            

            </ScrollView>
            
            <TouchableOpacity style={styles.button} onPress={ buyHandler}>
                <Text style={styles.buttunText}>  Finalizar Compra </Text>
            </TouchableOpacity> 
        </View>


    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
       
        fontSize:19,
        
       
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

    totalPurchase:{
        flexDirection:'row-reverse',
        
        
    },

    ButtontalPurchase:{
       fontSize: 18,
       fontWeight:'bold',
       backgroundColor: '#dadae5',
       borderRadius:10,
       padding: 5
       
      

    },

    button:{
       width:320,
        height:42,
        
        backgroundColor: '#44c427',
        borderRadius: 10,
        marginHorizontal: 20,

        
        alignItems:'center',
        justifyContent:'center'


    },

    buttunText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'

    },

 });
   



    