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
} from 'react-native';
import { HallarDet, ListaDet, InfoDet } from './tabs'

const {width, height} = Dimensions.get('window');


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
    <View style={{ position: 'absolute', bottom: 40, width }} >
        <View
            ref={containerRef}
            style={{
                justifyContent: 'space-evenly',
                flex: 1,
                flexDirection: 'row',
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
        {measures.length > 0 &&
            (<Indicator data={data} measures={measures} scrollX={scrollX} />
        )}
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

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View
          style={[
              StyleSheet.absoluteFillObject,
              {alignItems: 'flex-start'},
          ]}
      >
          <Image
              source={background}
              style={{flex:1, width: width}}
          />
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
                          alignItems: 'center'},
                      ]}
                >
                    <View
                        style={{
                            top: 70,
                            left: 2,
                            width: width*0.9,
                            height: height*0.75,
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

