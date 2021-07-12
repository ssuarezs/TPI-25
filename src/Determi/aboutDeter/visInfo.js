import React, { useState } from 'react';
import { Text, View, SectionList, FlatList } from 'react-native';
import { Modal } from '../../components/index'
import { ItemTitle, SectionFrame } from '../compDet/BOOitems'
import ShowCont from '../compDet/showCont'
import styles from '../styles'
import info from './info.json'


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
                    setData(item.content)
                  }} />
              )}
              renderSectionHeader={({section}) => (
                    <SectionFrame title={section.title} />
              )}
          />

        <Modal visibility={visible}>
            <ItemTitle title={'Cerrar'} D={() => {
                setVisible(false)}} />
            <FlatList
              style={styles.FlatList}
              data={data}
              keyExtractor={x => x.contentKey}
              renderItem={({item}) => (
                  <ShowCont item={item} />
            )}
            />
        </Modal>


        </View>
    );
}

