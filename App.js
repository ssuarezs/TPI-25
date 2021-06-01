import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { HallarDet, ListaDet, InfoDet, Menu } from './screens'
import { MapDet, ePunto, verDet, verInfo, usoApp  } from './screens'
import styles from './screens/styles.js'
import React from 'react';
import { View, Image } from 'react-native';


const TabNavigator = createBottomTabNavigator({ 
  HallarDeterm: HallarDet,   
  ListadoDeterm: ListaDet,
  InfoDeterm: InfoDet,  
  menu: Menu,
}, {
  initialRouteName: 'HallarDeterm',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state  
      let iconName
     if (routeName === 'HallarDeterm') {  
       iconName = require('./screens/assets/hallar.png')
     }  
     if (routeName === 'ListadoDeterm') {
       iconName = require('./screens/assets/list.png')
     }  
     if (routeName === 'InfoDeterm') {
       iconName = require('./screens/assets/info.png')
     }  
     if (routeName === 'menu') {
       iconName = require('./screens/assets/menu.png')
     }   
      return (
	<View style={{ ...styles.act, borderColor:tintColor, }}>
	 <Image style={{height:50, width: 50}} source={iconName} />
	</View>
      ) 
      
    },
  tabBarOptions: styles.tabBar,
  })
})

const RootStack = createStackNavigator({
  Main: TabNavigator,
  MapDeterm: MapDet ,
  elegirPunto: ePunto ,
  verDeterm: verDet ,
  verInform: verInfo ,
  usoApp: usoApp ,
}, {
  mode: 'Modal',
  defaultNavigationOptions: styles.stackBar,
})

export default createAppContainer(RootStack)

