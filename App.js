import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { HallarDet, ListaDet, InfoDet, Menu } from './screens'
import { MapDet, ePunto, verDet, verInfo, usoApp  } from './screens'

const TabNavigator = createBottomTabNavigator({ 
  HallarDeterm: HallarDet,   
  ListadoDeterm: ListaDet,
  InfoDeterm: InfoDet,  
  menu: Menu,
}, {
  initialRouteName: 'HallarDeterm',
})

const RootStack = createStackNavigator({
  Main: TabNavigator,
  MapDeterm: MapDet ,
  elegirPunto: ePunto ,
  verDeterm: verDet ,
  verInform: verInfo ,
  usoApp: usoApp ,
}, {
  mode: 'Modal'
})

export default createAppContainer(RootStack)

