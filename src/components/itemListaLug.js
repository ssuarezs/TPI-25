import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import sty from './styles.js'


export default ({ navigation, item }) => {

  const irLocacion = () => {
    if(item){
     navigation.navigate('verDeterm', {
       location : item.coordinate
     })}
  }

  return (
      <TouchableOpacity
        style={sty.item}
        onPress={()=>irLocacion()}
      >
          <Text style={sty.title}>
            {item.name}
          </Text>
          <Text style={sty.subtitle}>
            {item.fecha}
          </Text>
      </TouchableOpacity>
  );

}

