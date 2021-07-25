import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { MapDet, ePunto, verDet, TabsScreen, Menu  } from './screens'


const RootStack = createStackNavigator({
  Main: TabsScreen,
  MapDeterm: MapDet ,
  elegirPunto: ePunto ,
  verDeterm: verDet ,
  menu: Menu,
}, {
  mode: 'Modal',
  headerMode: 'none',
})

export default createAppContainer(RootStack)

