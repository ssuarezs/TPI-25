import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import sty from './styles.js'


export default ({ navigation, item, deleteElement }) => {

  const irLocacion = () => {
    if(item){
     navigation.navigate('verDeterm', {
       location : item.coordinate
     })}
  }

  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
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
          <TouchableOpacity
            style={sty.deletemark}
            onPress={deleteElement}>
              <Text style={sty.title}>X</Text>
          </TouchableOpacity>
    </View>
  );

}

