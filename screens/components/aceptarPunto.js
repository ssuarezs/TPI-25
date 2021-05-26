import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default ({ onPress, onPressLeft }) => {
    return (
	    <>
	      <Text>Este es el punto que deseas elegir</Text>      
	     <TouchableOpacity onPress={onPress} >
	       <Text>Aceptar</Text>
	     </TouchableOpacity>   
	     <TouchableOpacity onPress={onPressLeft} >
	       <Text>Cancelar</Text>
	     </TouchableOpacity>
	  </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 60,
  },
})
