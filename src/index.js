import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { MapDet, ePunto, verDet, TabsScreen  } from './screens'


const RootStack = createStackNavigator({
  Main: TabsScreen,
  MapDeterm: MapDet ,
  elegirPunto: ePunto ,
  verDeterm: verDet ,
}, {
  mode: 'Modal',
  headerMode: 'none',
})

export default createAppContainer(RootStack)

