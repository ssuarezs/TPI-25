import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import sty from './styles.js'
import { Entypo } from '@expo/vector-icons';
const {width, height} = Dimensions.get('screen');

export default ({navigation}) => {

  const URL = (url) => {
    WebBrowser.openBrowserAsync(url);
  }

    const link = 'https://tpifibog.wixsite.com/website-31'

   return <View style={sty.container}>
       <View style={{
            width: width,
            height: width*0.14,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
       }}>
            <TouchableOpacity onPress={()=> navigation.goBack()} >
            <Entypo name="chevron-left" size={35} color="#206a5d" />
            </TouchableOpacity>
            <Text style={sty.title}>MENU</Text>
            <Entypo name="chevron-left" size={35} color="white" />
       </View>
       <View style={{flex: 1, marginTop: 20}}>
            <Text style={{...sty.subtitle, color:'grey'}}>CONTACTO Y CONOCE</Text>
            <View style={{height: 2, width: width*0.8, backgroundColor:'grey'}}/>
            <Text style={sty.textA}>Contacto con Desarrolladores</Text>
            <Text style={sty.textB}>jemunozva@unal.edu.co</Text>
            <TouchableOpacity style={sty.link} onPress={() => URL(link)}>
                <Text style={{...sty.textB, fontSize: 18, marginLeft:0}}>Pagina del Proyecto RDA</Text>
            </TouchableOpacity>
       </View>
    </View>
}


