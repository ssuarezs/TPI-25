import React, { useState } from 'react';
import { Animated, StyleSheet, View, Text, TouchableOpacity, SectionList, ScrollView, Dimensions } from 'react-native';
import { Geojson } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Modal, Map } from '../components/index'
import { Entypo } from '@expo/vector-icons';
import Constants from 'expo-constants';
import styles from './styles'

const { width, height } = Dimensions.get('screen');
const verdeO = '#206a5d'
const verde = '#80B314'

import { dets } from './dets'
import DetIncendio from './incendios/verInfo'
import DetMovMasa from './movMasa/verInfo'
import DetPomca from './pomca/verInfo'
import mapazona from './pomca/geojson/1Sin'

const ITEM = ({ D, title }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={D} >
          <Text style={styles.textI} >{title}</Text>
      </TouchableOpacity>
    )
}

export default ({ posicion, modalVis }) => {

  const [determ, setDeterm] = useState(0)
  const [detE, setDetE] = useState('SELECCIONAR DETERMINANTE')
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
                  setDeterm(item.num)
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
    <Animated.ScrollView
        contentContainerStyle={{ paddingTop: 10, width: width, alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
    >
        <View style={{ height: 200}}>
          <Map posicion={posicion} >
        <Geojson geojson={mapazona}
            strokeColor='green'
            strokeWidth={2} />
      </Map>
        </View>
        <View style={{ height: 4}}/>
        {(determ == 0) && (<Text style={{...styles.title, marginTop: 20, padding: 10}}>
            Seleccione un determinante Ambiental con el boton de ¡Opciones!</Text>)}
        {(determ == 1) && (<DetIncendio posicion={posicion} />)}
        {(determ == 2) && (<DetMovMasa posicion={posicion} />)}
        {(determ == 3) && (<DetPomca posicion={posicion} />)}
        <View
            style={[sty.bottomActions]}
        />
    </Animated.ScrollView>
            <Animated.View style={[
                sty.bottomActions,
                {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    paddingHorizontal: 10,
                }
            ]}>
                <View style={{ backgroundColor:'white', flexDirection: 'row', height: 60, alignItems: 'center', justifyContent: 'center' }}>
                      <View style={styles.buttonB}>
                        <Text style={styles.titleB} >{detE}</Text>
                      </View>
                    <Animated.View style={[sty.icon]}>
                        <TouchableOpacity
                            onPress={() => {setVisible(true)}}
                            style={{alignItems: 'center',}}
                            >
                            <Entypo name="cog" size={40} color="#206a5d" />
                            <Text style={{...styles.subtitle, fontSize: 7,}}>OPCIONES</Text>
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={[sty.icon]}>
                        <TouchableOpacity
                            onPress={modalVis}
                            style={{alignItems: 'center',}}
                            >
                            <Entypo name="save" size={40} color="#206a5d" />
                            <Text style={{...styles.subtitle, fontSize: 7,}}>GUARDAR</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </Animated.View>
    </View>
  );
}


const sty = StyleSheet.create({
    featuredImage: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        marginRight: 20,
        borderRadius: 10,
    },
    bottomActions: {
        height: 80,
        width: width,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    image: { width: '100%', height: height * 0.4, resizeMode: 'cover', marginBottom: 20 },
    featuredTitle: {
        fontSize: 24,
        fontWeight: '800',
        marginVertical: 20,
    },
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    paragraph: {
        flex: 1,
        marginBottom: 10,
        // fontFamily: 'Georgia'
        fontSize: 14,
        lineHeight: 16 * 1.5,
    },
    icon: {
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
