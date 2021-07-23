import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { fetchLug, saveLug, deleteLug } from '../../reducers/listaL'
import {ItemLista, Modal} from '../../components'
import sty from './styles.js'
const {width, height} = Dimensions.get('screen')

const ListTab = ({ navigation, lista, fetchLug, saveLug, deleteLug }) => {

  const [visibility, setVisibility] = useState(false)
  const [itemKey, setItemKey] = useState(null)

  useEffect(() => {
    fetchLug()
  }, [])

  return (
    <View style={sty.container}>
      <Text style={sty.title}>
          LUGARES GUARDADOS
      </Text>
      <View style={{height:3 , backgroundColor: '#206a5d', width: width*0.8 }} />
        {lista.data ?
            <View style={styles.containList}>
              <FlatList
                style={styles.list}
                data={lista.data}
          showsVerticalScrollIndicator={false}
                keyExtractor={x => x.name}
                renderItem={({item}) =>
                  <View key={item.key}>
                  <ItemLista
                    navigation={navigation}
                    item={item}
                    deleteElement={() => {
                      setVisibility(true)
                      setItemKey(item.key)
                    }} />
                  </View>
                }
              />
            </View>
          :
        <Text style={sty.subtitle}>
          Aun no has guardado ningun punto
        </Text>
        }
        <Modal
            visibility={visibility}
        >
            <View style={{width: width*0.8, height: width*0.3}}>
            <View>
              <Text style={{...sty.title, textAlign: 'center'}}>
                ¿ Estas seguro de querer eliminar este lugar guardado ?
              </Text>
            </View>
           <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                   style={sty.button}
                   onPress={() => setVisibility(false)} >
                    <Text style={sty.title}>CANCELAR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                   style={sty.button}
                   onPress={() => {
                        deleteLug(itemKey)
                        fetchLug()
                        setVisibility(false)
                   }} >
                    <Text style={sty.title}>ACEPTAR</Text>
                </TouchableOpacity>
               </View>
            </View>
       </Modal>
    </View>
  );
}

const mapStateToProps = state => {
    return { lista: state.listaL }
}

const mapDispatchToProps = dispatch => ({
    fetchLug: () => dispatch(fetchLug()),
    saveLug: (lugar) => dispatch(saveLug(lugar)),
    deleteLug: (itemKey) => dispatch(deleteLug(itemKey)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTab)

const styles = StyleSheet.create({
  list: {
    alignSelf: 'stretch',
  },
  containList: {
    alignSelf: 'stretch',
    marginBottom: 30,
  }
});
