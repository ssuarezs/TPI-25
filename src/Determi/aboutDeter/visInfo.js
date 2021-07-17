import React, { useState } from 'react';
import { Text, View, SectionList, FlatList, Dimensions } from 'react-native';
import { Modal } from '../../components/index'
import { ItemTitle, SectionFrame } from '../compDet/BOOitems'
import ShowCont from '../compDet/showCont'
import styles from '../styles'
import info from './info.json'
const {width, height} = Dimensions.get('screen')


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
                paddingHorizontal: 10
            }}>
            <Text style={styles.title} onPress={() => {
                setVisible(false)}}>X</Text>
                <Text style={styles.textC}>{data.subtitle}</Text>
            </View>
              <View style={{height:3 , backgroundColor: '#206a5d', width: width*0.85, marginTop: 5 }} />
            <FlatList
              style={styles.FlatList}
              data={data.content}
              showsVerticalScrollIndicator={false}
              bounces={false}
              keyExtractor={x => x.contentKey}
              renderItem={({item}) => (
                  <ShowCont item={item} />
            )}
            />
        </Modal>


        </View>
    );
}

