import React, { useState } from 'react';
import { Text, View, Image, SectionList, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { ItemTitle, SectionFrame } from '../compDet/BOOitems'
import { Modal } from '../../components/index'
import { Entypo } from '@expo/vector-icons';
import ShowCont from './showCont'
import styles from '../styles'
import info from './info.json'
const {width, height} = Dimensions.get('screen')

const images = {
    "¿Qué son los determinantes ambientales?": require('./images/A.png'),
    "¿Cómo se clasifican los determinantes ambientales?": require('./images/B.png'),
    "¿Cuál es la importancia de los determinantes ambientales?": require('./images/C.png'),
    "¿Qué es Corpochivor?": require('./images/D.png'),
    "¿Quiénes somos?": require('./images/E.png'),
}

export default ({navigation}) => {

    const [data, setData] = useState([])
    const [visible, setVisible] = useState(false)

    return (
        <View style={styles.center}>
            <SectionList
              style={styles.FlatList}
              showsVerticalScrollIndicator={false}
              sections={info.listInfo}
              renderItem={({item}) => (
                  <ItemTitle title={item.subtitle} D={() => {
                    setVisible(true)
                    setData(item)
                  }} />
              )}
              renderSectionHeader={({section}) => (
                    <SectionFrame title={section.title} />
              )}
            />
            <Modal visibility={visible}>
                <View style={{
                    flexDirection: 'row',
                    width: width*0.8,
                    paddingHorizontal: 8,
                }}>
                <TouchableOpacity style={styles.centro} onPress={() => setVisible(false)}>
                    <Entypo name="circle-with-cross" size={28} color='#206a5d' />
                </TouchableOpacity>
                    <Text style={styles.textC}>{data.subtitle}</Text>
                </View>
                  <View style={{height:3 , backgroundColor: '#206a5d', width: width*0.85, marginTop: 5 }} />
                <FlatList
                  style={styles.FlatList}
                  data={data.content}
                  showsVerticalScrollIndicator={false}
                  bounces={false}
                  keyExtractor={x => x.contentKey}
                  renderItem={({item, index}) => (
                      <View>
                      <ShowCont item={item} />
                      {index === 0 && (<Image source={images[data.subtitle]} style={styles.image}/>)}
                      </View>
                )}
                />
            </Modal>
        </View>
    );
}

