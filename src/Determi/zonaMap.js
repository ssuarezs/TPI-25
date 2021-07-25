import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, SectionList, Image, Dimensions } from 'react-native';
import { Modal } from '../components/index'
import { SectionFrame } from './compDet/BOOitems'
import { dets } from './dets'

import styles from './styles'
const {width, height} = Dimensions.get('screen')
const verdeO = '#206a5d'
const verde = '#80B314'

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
          <View style={{ padding: 10, width: width*0.8, height: height*0.5 }}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', color:verdeO, fontSize: 16, marginBottom: 10, }}>Elige el Determinante Ambiental de tu interes</Text>
            <SectionList
              style={styles.FlatList}
              showsVerticalScrollIndicator={false}
              sections={dets}
              keyExtractor={i => i.num}
              renderItem={({item}) => (
                <ITEM key={item.num} title={item.titulo} D={() => {
                  setDeterMap(item.map)
                  setDetE(item.titulo)
                  setVisible(false)
                }} />
              )}
              renderSectionHeader={({section}) => (
                  <View style={{ backgroundColor: verdeO, padding: 10, marginTop: 4, borderRadius: 20, }}>
                    <Text style={{textAlign: 'center', fontWeight: 'bold', color:'white', fontSize: 14 }}>{section.titulo}</Text>
                  </View>
              )}
            />
          </View>
        </Modal>
            <TouchableOpacity style={styles.buttonD}
              onPress={() => {setVisible(true)}}  >
                <Text style={styles.titleD} >{detE}</Text>
            </TouchableOpacity>
          {deterMap && (
            <View style={{
                justifyContent: 'center',
                backgroundColor: '#80b314',
                paddingVertical: 5,
                borderRadius: 20,
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


