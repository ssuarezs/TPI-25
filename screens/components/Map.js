import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default ({posicion}) => {

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
    <MapView region={region} style={styles.map}>
    {posicion 
      ? <Marker 
      coordinate={posicion}
      title="Tu ubicacion"
      />
      : null
    }
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
