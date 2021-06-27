import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import sty from './styles'

export default ({ onPress, onPressLeft }) => {
    return (
        <>
	      <Text style={{...sty.title, textAlign: 'center'}}>
            ¿ Este es el punto que deseas elegir ?
          </Text>
        <View style={sty.div}>
             <TouchableOpacity
                style={sty.button}
                onPress={onPress} >
              <Text style={sty.buttonText}>ACEPTAR</Text>
             </TouchableOpacity>
             <TouchableOpacity
                style={sty.button}
                onPress={onPressLeft} >
              <Text style={sty.buttonText}>CANCELAR</Text>
             </TouchableOpacity>
        </View>
      </>
  )
}

