import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Input from './input';
import sty from './styles'

const {width, height} = Dimensions.get('screen')

export default ({ onSubmit, close, handleLong, handleLat }) => {

    return <View style={{width: width*0.8, height: height*0.3}}>
        <Text style={{...sty.title, textAlign: 'center', marginBottom: 20}}>
            Ingresa las coordenadas de tu interes</Text>
        <Input
            title=" Ingresa la longitud del punto"
            placeholder="Escribe coordenada..."
            onChangeText={handleLong}
            keyboardType="numeric"
        />
        <Input
            title=" Ingresa la latitud del punto"
            placeholder="Escribe coordenada..."
            onChangeText={handleLat}
            keyboardType="numeric"
        />
        <View style={sty.rowView}>
        <TouchableOpacity
            style={sty.button}
            onPress={close}
        >
           <Text style={sty.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={sty.button}
            onPress={onSubmit}
        >
           <Text style={sty.buttonText}>Aceptar</Text>
        </TouchableOpacity>
        </View>
    </View>
}

