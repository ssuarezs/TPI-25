import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { fetchLug, saveLug } from '../reducers/listaL'
import ItemLista from '../components/itemListaLug'
import sty from './styles.js'

const ListTab = ({ navigation, lista, fetchLug, saveLug }) => {

  useEffect(() => {
    fetchLug()
  }, [])

  return (
    <View style={sty.container}>
      <Text style={{...sty.title, marginTop: 10}}>
          LISTADO DE PUNTOS GUARDADOS ANTERIORMENTE
      </Text>

        {lista.data ?
            <View style={styles.containList}>
              <FlatList
                style={styles.list}
                data={lista.data}
                keyExtractor={x => x.name}
                renderItem={({item}) =>
                  <ItemLista
                    navigation={navigation}
                    item={item} />
                }
              />
            </View>
          :null
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
    marginTop: 15,
    marginBottom: 30,
    borderColor : '#ffcc29',
    borderBottomWidth : 3,
    borderTopWidth : 3,
  }
});
