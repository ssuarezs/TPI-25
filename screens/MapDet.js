import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Map } from './components/index' 
import Incendios from '../Determi/incendios/mapIncendio' 

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
   </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapa: {
    flex: 5,
  }
});

