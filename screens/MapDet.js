import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Map } from './components/index' 
import { Incendios } from '../Determi/incendios/index' 

export default ({navigation}) => {

   return (
    <>
      <View style={styles.mapa}>
	 <Map >
	   <Incendios mapInteractivo={true} />
	 </Map>
      </View>

      <View style={styles.container}>
	  <Text>Mapa Interactivo de la zona</Text> 
	  <Text>Riesgo de incendio</Text> 
	  <Text style={ [{color: 'rgba( 73,166, 74,0.6)'}]} >Riesgo Muy bajo</Text> 
	  <Text style={ [{color: 'rgba( 84,231, 86,0.6)'}]} >Riesgo Bajo</Text> 
	  <Text style={ [{color: 'rgba(238,255, 61,0.6)'}]} >Riesgo Medio</Text> 
	  <Text style={ [{color: 'rgba(255,171, 61,0.6)'}]} >Riesgo Alto</Text> 
	  <Text style={ [{color: 'rgba(222, 27, 37,0.6)'}]} >Riesgo Muy alto</Text> 
     
     </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapa: {
    flex: 5,
  }
});

