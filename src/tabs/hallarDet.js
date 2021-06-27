import React from 'react';
import { View } from 'react-native';
import sty from './styles'
import { ItemHU } from '../components/index';
import { items } from './itemsParaHD'

export default ({navigation}) => {

  return (
    <View style={sty.container}>
	  <ItemHU navigation={navigation} item={items[0]}  />
	  <ItemHU navigation={navigation} item={items[1]}  />
	  <ItemHU navigation={navigation} item={items[2]}  />
    </View>
  );

}

