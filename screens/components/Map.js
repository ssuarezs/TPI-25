import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker, Geojson } from 'react-native-maps';
import * as turf from '@turf/turf'

export default ({ posicion, onLongPress }) => {

  
  const polygon = {
      type: 'FeatureCollection',
      features: [
	{
	  type: 'Feature',
	  properties: {},
	  geometry: {
	    type: 'Polygon',
	    coordinates: [   
	  [
	    [-74, 6],
	    [-73, 6],
	    [-73, 4],
	    [-74, 4],
	  ]

	    ],
	  }
	}
      ]
    };

  let point = turf.point([0, 0])


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
   point = turf.point([posicion.longitude, posicion.latitude])

   }

  const pointInPoly = turf.booleanPointInPolygon(point, polygon.features[0]);
  
  console.log(pointInPoly)

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
    <Geojson 
      geojson={polygon} 
      fillColor="green"
    />
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
