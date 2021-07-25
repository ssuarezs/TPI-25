import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    findNodeHandle,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Flatlist,
    Animated,
    Image,
    TouchableOpacity,
    NativeModules,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import sty from './styles.js'
import { HallarDet, ListaDet, InfoDet } from './tabs'

const {width, height} = Dimensions.get('screen');
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;


const Tab = React.forwardRef(({data, item, onItemPress}, ref) => {
    return (
    <TouchableOpacity onPress={onItemPress}>
        <View ref={ref}>
            <Text
                style={{
                    color: 'white',
                    fontSize: 40 / data.length,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                }}
            >
                {item.title}
            </Text>
        </View>
    </TouchableOpacity>
    )
})

const Indicator = ({data, measures, scrollX}) => {
    const inputRange =  data.map((_, i) => i*width)
    const indicatorWidth = scrollX.interpolate({
        inputRange,
        outputRange: measures.map(measures => measures.width)
    })
    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: measures.map(measures => measures.x)
    })


    return <Animated.View
        style={{
            position: 'absolute',
            height: 4,
            width: indicatorWidth,
            backgroundColor: 'white',
            bottom: -10,
            transform: [{
                translateX
            }]
        }}
    />
}

const Tabs = ({ data, scrollX, onItemPress }) => {
    const [measures, setMeasures] = React.useState([])
    const containerRef = React.useRef()
    let s = true
    React.useEffect(() => {
        let m = []
        data.forEach(item => {
            item.ref.current.measureLayout(
                containerRef.current,
                (x, y, width, height) => {
                    m.push({
                        x, y, width, height,
                    })
                    if(m.length === data.length){
                        setMeasures(m)
                    }
                }
            )
        })
    })

    return (
    <View style={{ position: 'absolute', bottom: 30, width }} >
        <View
            ref={containerRef}
            style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
        }}>
            {data.map((item, index) => {
                return <Tab
                    data={data}
                    key={item.key}
                    item={item}
                    ref={item.ref}
                    onItemPress={() => onItemPress(index)}
                />
            })}
        </View>
        {measures.length > 0 && (<Indicator data={data} measures={measures} scrollX={scrollX} />)}
    </View>
    )
}

export default ({navigation}) => {

    const background = require('../assets/tabsBackground/tabs.png')
    const screens = {
        explorar:  <HallarDet navigation={navigation} />,
        lugares: <ListaDet navigation={navigation} />,
        conoce: <InfoDet navigation={navigation} />,
    };
    const data = Object.keys(screens).map((i) => ({
      key: i,
      title: i,
      pag: screens[i],
      ref: React.createRef()
    }));

    const scrollX = React.useRef(new Animated.Value(0)).current;
    const ref = React.useRef()
    const onItemPress = React.useCallback(itemIndex => {
        ref?.current?.scrollToOffset({
            offset: itemIndex*width,
        })
    })

    const inputRange =  data.map((_, i) => i*width)
    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: [0, 20, 40]
    })


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="rgba(255,255,255,0.8)"  />
        <View
          style={[
              StyleSheet.absoluteFillObject,
              {alignItems: 'flex-start'},
          ]}
        >
          <Animated.View style={{
              flex:1,
              width: width*1.2,
              left: translateX,
              alignItems: 'flex-end'
            }}
          >
              <Image
                  source={background}
                  style={{
                      flex:1,
                      width: width*1.3,
                      left: -60,
                  }}
              />
          </Animated.View>
        </View>
        <Animated.FlatList
          ref={ref}
          data={data}
          keystractor={item => item.key}
          horizontal
          pagingEnabled
          onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
          )}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          renderItem={({item, index}) => {
              return (
              <View style={{width, height}}>
                <View
                      style={[
                          StyleSheet.absoluteFillObject,
                          {backgroundColor: 'rgba(0,0,0,0.2)',
                          alignItems: 'center',
                          paddingTop: STATUSBAR_HEIGHT+width*0.2,
                          paddingBottom: width*0.4,
                          },
                      ]}
                >
                    <View
                        style={{
                            flex:1,
                            width: width*0.85,
                            justifyContent: 'space-evenly',
                        }}
                    >
                        {item.pag}
                    </View>
                </View>
              </View>
              )
          }}
        />
        <View style={[
          StyleSheet.absoluteFillObject,
          {
            flex: 1,
            width: width,
            height: width*0.14,
            flexDirection: 'row',
            marginTop: STATUSBAR_HEIGHT+10,
        }]}>
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: width*0.7,
              height: width*0.13,
              marginLeft: 20,
              backgroundColor:'rgba(255,255,255,0.8)',
              borderRadius: 20,
            }}>
            <Text style={sty.title}>Ramiriquí</Text>
            </View>
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              margin: 1,
              marginLeft: 15,
              marginRight: 20,
              width: 50,
              backgroundColor:'rgba(255,255,255,0.8)',
              borderRadius: 25,
            }}>
                <TouchableOpacity onPress={()=> navigation.navigate('menu')} >
                <Entypo name="grid" size={32} color="#206a5d" />
            </TouchableOpacity>
            </View>
        </View>

        <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

