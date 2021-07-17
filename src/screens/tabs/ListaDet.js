import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { fetchLug, saveLug } from '../../reducers/listaL'
import ItemLista from '../../components/itemListaLug'
import sty from './styles.js'
const {width, height} = Dimensions.get('screen')

const ListTab = ({ navigation, lista, fetchLug, saveLug }) => {

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
                  <ItemLista
                    navigation={navigation}
                    item={item} />
                }
              />
            </View>
          :
        <Text style={sty.subtitle}>
          Aun no has guardado ningun punto
        </Text>
        }
    </View>
  );
}

const mapStateToProps = state => {
    return { lista: state.listaL }
}

const mapDispatchToProps = dispatch => ({
    fetchLug: () => dispatch(fetchLug()),
    saveLug: (lugar) => dispatch(saveLug(lugar)),
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
