import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import ZonaMap from '../Determi/zonaMap'
import sty from './styles.js'
import { Entypo } from '@expo/vector-icons';

const {width, height} = Dimensions.get('screen');

export default ({navigation}) => {
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
            <Text style={sty.subtitle}>MAPA DE LA ZONA</Text>
            <Entypo name="chevron-left" size={35} color="white" />
       </View>
       <ZonaMap/>
    </View>
}


