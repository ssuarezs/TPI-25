import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { Modal } from '../components/index'
import { dets } from './dets'

import styles from './styles'


const ITEM = ({ D, title }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={D} >
          <Text style={styles.textI} >{title}</Text>
      </TouchableOpacity>
    )
}

export default ({ posicion }) => {

    const [deterMap, setDeterMap] = useState(null)
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
                  setDeterMap(item.map)
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
          {deterMap && (
            <View style={{
                justifyContent: 'center',
                backgroundColor: '#80b314',
                paddingVertical: 5,
                borderRadius: 40,
            }}>
            <Image
                source={deterMap}
                style={styles.mapImage}
            />
            </View>
          )}
    </View>
  );
}


