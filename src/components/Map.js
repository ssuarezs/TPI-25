import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker, Geojson } from 'react-native-maps';
import mapazona from '../Determi/municipios/ramiriquiri/ramiriquiri'

const {width, height} = Dimensions.get('screen')

export default ({ posicion, onLongPress, children }) => {

  let region = {
      latitude : 5.3844,
      longitude : -73.3306,
      latitudeDelta : 0.1,
      longitudeDelta : 0.1,
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
        {(posicion != null)
            ? <Marker
                coordinate={posicion}
                title="Ubicacion Seleccionada"
              />
            : null
        }
        {children}
        <Geojson geojson={mapazona}
            strokeColor='green'
            strokeWidth={2} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#80b314',
    padding: 5,
  },
  map: {
    flex: 1,
    width: width,
  }
});
