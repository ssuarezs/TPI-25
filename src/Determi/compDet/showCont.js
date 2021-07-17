import React, { useState } from 'react';
import { Text, View, SectionList, FlatList } from 'react-native';
import { Modal } from '../../components/index'
import styles from '../styles'


export default ({ item }) => {

    return (
        <View style={styles.center}>
        {item.type=='parrafo' ?
            <Text style={styles.parraf}>{item.item}</Text> : null
        }
        </View>
    );
}

