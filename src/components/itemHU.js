import React from 'react';
import { Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Modal from './modal';
import * as Location from 'expo-location'
import sty from './styles.js'

const verdeO = '#206a5d'

export default ({navigation, item, modCarga}) => {

  const [visible, setVisible] = React.useState(false)

    const avisoLoc = 'No tenemos permisos necesarios para acceder a la localizacion'

  const buscaLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted'){
      return Alert.alert(avisoLoc)
    }else{
        setVisible(true)
        const location = await Location.getCurrentPositionAsync({})
        setVisible(false)
         navigation.navigate('verDeterm', {
             location : location.coords
         })
    }
  }

    const rutaname=item.ruta
    const ruta = () => {
        switch(rutaname){
            case 'HallarP':
                buscaLocation()
            break
            case 'ElegirP':
                navigation.navigate('elegirPunto')
            break
            case 'Mapa':
                navigation.navigate('MapDeterm')
            break
        }
    }

    const icono = () => {
        let Isource
        switch(rutaname){
            case 'HallarP':
                Isource = require('../assets/ubicacion.png')
            break
            case 'ElegirP':
                Isource = require('../assets/elegir.png')
            break
            case 'Mapa':
                Isource = require('../assets/map.png')
            break
        }
        return <Image style={sty.img} source={Isource} />
    }

  return (
  <>
        <Modal visibility={visible}>
            <ActivityIndicator size={100} color={verdeO}/>
            <Text style={{textAlign: 'center', fontWeight: 'bold', color:verdeO, fontSize: 16, marginBottom: 10, }}>Cargando...</Text>
        </Modal>

	<TouchableOpacity key={item.title} style={sty.item} onPress={ruta} >
	  <View key={item.title}  style={sty.rowView}>
          <View style={sty.center}>
            <Text style={sty.title} >{item.titulo}</Text>
            <Text style={sty.subtitle}>
              {item.descripcion}
            </Text>
          </View>
          {icono()}
	  </View>
	</TouchableOpacity>
  </>
  );
}

