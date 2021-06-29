import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Modal } from '../components/index'
import { dets } from './dets'

import styles from './styles'
import DetIncendio from './incendios/verInfo'
import DetMovMasa from './movMasa/verInfo'


const ITEM = ({ D, title }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={D} >
          <Text style={styles.textI} >{title}</Text>
      </TouchableOpacity>
    )
}

export default ({ posicion }) => {

  const [determ, setDeterm] = useState(0)
  const [detE, setDetE] = useState('SELECCIONAR DETERMINANTE AMBIENTAL')
  const [visible, setVisible] = useState(false)

  return (
    <View style={styles.center}>

	<Modal visibility={visible}>
	    <FlatList
	      style={styles.FlatList}
	      data={dets}
	      keyExtractor={x => x.titulo}
	      renderItem={({item}) => (
            <ITEM title={item.titulo} D={() => {
              setDeterm(item.num)
              setDetE(item.titulo)
              setVisible(false)
		}} />
	    )}
	    />
	</Modal>

      <TouchableOpacity style={styles.buttonB}
          onPress={() => {setVisible(true)}}  >
        <Text style={styles.titleB} >{detE}</Text>
      </TouchableOpacity>

	{(determ == 1) ? <DetIncendio posicion={posicion} /> : null  }
	{(determ == 2) ? <DetMovMasa posicion={posicion} /> : null  }

    </View>
  );
}


