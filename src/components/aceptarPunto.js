import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import sty from './styles'

const {width, height} = Dimensions.get('screen')

export default ({ onPress, onPressLeft }) => {
    return <View style={{width: width*0.8, height: height*0.15}}>
        <View>
	      <Text style={{...sty.title, textAlign: 'center'}}>
            ¿ Este es el punto que deseas elegir ?
          </Text>
        </View>
        <View style={sty.rowView}>
             <TouchableOpacity
                style={sty.button}
                onPress={onPressLeft} >
              <Text style={sty.buttonText}>CANCELAR</Text>
             </TouchableOpacity>
             <TouchableOpacity
                style={sty.button}
                onPress={onPress} >
              <Text style={sty.buttonText}>ACEPTAR</Text>
             </TouchableOpacity>
        </View>
    </View>
}

