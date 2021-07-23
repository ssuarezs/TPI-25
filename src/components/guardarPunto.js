import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Input from './input';
import sty from './styles'

const {width, height} = Dimensions.get('screen')

export default ({ onSubmit, close, handleName }) => {

    return <View style={{width: width*0.8, height: height*0.2}}>
          <Text style={{...sty.title, textAlign: 'center', marginBottom: 20}}>
            ¿Quieres guardar este Lugar?</Text>
        <Input
            title=" Ingresa Nombre del Lugar"
            placeholder="Escribe nombre..."
            onChangeText={handleName}
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

