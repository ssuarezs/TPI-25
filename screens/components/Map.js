import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default ({ posicion, onLongPress }) => {

  let region = {
      latitude : 4.21,
      longitude : -74.63,
      latitudeDelta : 10,
      longitudeDelta : 10,
    }

 if(posicion != null){ 
    region = {
      latitude : posicion.latitude,
      longitude : posicion.longitude,
      latitudeDelta : 0.05,
      longitudeDelta : 0.05,
    }
   }

  return (
    <View style={styles.center}>
    <MapView 
      region={region} 
      style={styles.map} 
      onLongPress={onLongPress} 
    >
      {(posicion !== null)
	  ? <Marker 
	  coordinate={posicion}
	  title="Tu ubicacion"
	  />
	  : null
      }
    </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fec',
  },
  map: {
    flex: 1,
    width: Dimensions.get('window').width-20,
    height: Dimensions.get('window').height,
  }
});
