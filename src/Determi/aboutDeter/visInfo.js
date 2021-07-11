import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import { ItemTitle, SectionFrame } from '../compDet/BOOitems'
import styles from '../styles'
import info from './info.json'


export default ({navigation}) => {
    console.log(info)

  return (
    <View style={styles.center}>
      <SectionList
          style={styles.FlatList}
          showsVerticalScrollIndicator={false}
          sections={info.listInfo}
          renderItem={({item}) => (
                <ItemTitle title={item.subtitle} />
          )}
          renderSectionHeader={({section}) => (
                <SectionFrame title={section.title} />
          )}
      />
    </View>
  );
}

