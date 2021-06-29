import React, { useState, useEffect, useCallback } from 'react';
import { View, Dimensions, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Modal } from '../../components/index'
import * as WebBrowser from 'expo-web-browser';
import styles from '../styles'

const ITEM = ({ D, title }) => {
  return (
	    <TouchableOpacity style={styles.item} onPress={D} >
		<Text style={styles.textI} >{title}</Text>
	    </TouchableOpacity>
  )
}

const BOO = ({ D, title }) => {
  return (
	    <TouchableOpacity style={styles.button} onPress={D} >
		<Text style={styles.textB} >{title}</Text>
	    </TouchableOpacity>
  )
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


  return (
    <View style={styles.center}>

    <ScrollView style={styles.scroll}>

	  <View style={styles.section}>
        <Text style={styles.subtitle} >DEFINICIONES</Text>
        {info.parrafos.map(t => <Text style={styles.parraf} >{t}</Text>)}
	  </View>

      {info.tipos ?
	  <View style={styles.section}>
        <Text style={styles.subtitle} >TIPOS DE MOVIMIENTOS DE MASA</Text>
        {info.tipos.map(t => <Text style={styles.parraf} >{t}</Text>)}
	  </View>
      : null }

      {info.clasif ?
	  <View style={styles.section}>
        <Text style={styles.subtitle} >CLASIFICACION DE LA AMENAZA</Text>
        {info.clasif.map(t => <Text style={styles.parraf} >{t}</Text>)}
	  </View>
      : null }

	  <View style={styles.section}>
        <Text style={styles.subtitle}>LEYES Y NORMAS RELACIONADAS</Text>
        <BOO title={ley.titulo} D={() => {setVisible(true)}} />
        { ley.contenido.map(t => <Text style={styles.parraf} >{t}</Text>)}
	  </View>

	  <View style={styles.section}>
        <Text style={styles.subtitle} >RECURSOS DISPONIBLES EN INTERNET</Text>
        {info.Recursos.map(t => <BOO title={t.titulo} D={() => URL(t.link)} />)}
	  </View>

	  <View style={styles.space} />
	  <View style={styles.space} />
    </ScrollView>

    <Modal visibility={visible}>
        <FlatList
          style={styles.FlatList}
          data={info.Leyes}
          keyExtractor={x => String(x.num)}
          renderItem={({item}) => (
            <ITEM title={item.titulo} D={() => {
                configLey(item.num)}} />
        )}
        />
    </Modal>

   </View>
  );
}

