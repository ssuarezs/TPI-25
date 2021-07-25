import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, Dimensions, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Modal } from '../../components/index'
import * as WebBrowser from 'expo-web-browser';
import { ITEM, BOO } from './BOOitems'
import styles from '../styles'

const { width, height } = Dimensions.get('screen');
const verdeO = '#206a5d'

const portadas = {
    defin: require('./titles/4.png'),
    clasf: require('./titles/5.png'),
    leyes: require('./titles/6.png'),
    recursos: require('./titles/7.png'),
}

export default ({ info }) => {

  const [ley, setLey]=useState({
    titulo: 'SELECCIONAR LEY',
    contenido: []
  })
  const [visible, setVisible]=useState(false)
  const configLey = (x) => {
      setLey(info.Leyes[x])
      setVisible(false)
  }

  const URL = (url) => {
    WebBrowser.openBrowserAsync(url);
  }

    const showC = (t,i) => {
      if(t !== ''){
      if(i === 0){
         return <Text key={t} style={{...styles.subtitle, marginTop: 0}} >{t}</Text>
      }else if(i % 2 === 0){
         return <Text key={t} style={styles.textC} >{t}</Text>
      }else{
         return <Text key={t} style={styles.parraf} >{t}</Text>
      }
      }
    }


  return (
    <View style={styles.center}>
        <View style={{backgroundColor: '#206a5d', height: 1, width: width*0.9, marginBottom: 4,}}/>
      <Image source={portadas.defin} style={{
            marginTop: 20,
            width:width*0.7,
            height: width*0.17,
            resizeMode:'cover',
        }}/>
	  <View style={styles.section}>
        {info.parrafos.map(t => <Text key={t} style={styles.parraf} >{t}</Text>)}
	  </View>
      {info.tipos && (
          <>
        <View style={{backgroundColor: '#206a5d', height: 1, width: width*0.9, marginBottom: 4,}}/>
          <Image source={portadas.clasf} style={{
                marginTop: 20,
                width:width*0.7,
                height: width*0.17,
                resizeMode:'cover',
            }}/>
          <View style={styles.section}>
              {info.tipos.map((t, i) => showC(t,i))}
          </View>
          </>
      )}
      {info.clasif && (
	  <View style={styles.section}>
          {info.clasif.map((t, i) => showC(t,i))}
	  </View>
      )}
        <View style={{backgroundColor: '#206a5d', height: 1, width: width*0.9, marginBottom: 4,}}/>
          <Image source={portadas.leyes} style={{
                marginTop: 20,
                width:width*0.7,
                height: width*0.17,
                resizeMode:'cover',
            }}/>
	  <View style={styles.section}>
        <BOO title={ley.titulo} D={() => {setVisible(true)}} />
        { ley.contenido.map(t => <Text key={t} style={styles.parraf} >{t}</Text>)}
	  </View>
        <View style={{backgroundColor: '#206a5d', height: 1, width: width*0.9, marginBottom: 4,}}/>
          <Image source={portadas.recursos} style={{
                marginTop: 20,
                width:width*0.7,
                height: width*0.17,
                resizeMode:'cover',
            }}/>
	  <View style={styles.section}>
        {info.Recursos.map(t => <BOO key={t.titulo} title={t.titulo} D={() => URL(t.link)} />)}
	  </View>

	  <View style={{height: 30}} />
    <Modal visibility={visible}>
      <View style={{ padding: 10, width: width*0.8, height: height*0.3 }}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', color:verdeO, fontSize: 16, marginBottom: 10, }}>Elige la Ley de tu interes</Text>
        <FlatList
          style={styles.FlatList}
          data={info.Leyes}
          keyExtractor={x => x.titulo}
          renderItem={({item}) => (
            <ITEM title={item.titulo} D={() => {
                configLey(item.num)}} />
        )}
        />
      </View>
    </Modal>

   </View>
  );
}

