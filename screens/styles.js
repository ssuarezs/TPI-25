import { Dimensions } from 'react-native'
const primary = '#81b214'
const secondary = '#206a5d'
const tertiary = '#ffcc29'
const four = '#f8ede3'

const styles = {
  act: {
    borderBottomWidth: 5,
  },
  tabBar : {  
    inactiveTintColor: four,
    activeTintColor: tertiary,
    inactiveTintColor: secondary,
    showLabel: false,
    pressOpacity: 1,
    style: {
      position: 'absolute',
      height: 70,
      bottom: 15,
      left: 20,
      right: 20,
      elevation: 0,
      borderRadius: 15,
      backgroundColor: secondary,
	shadowColor: '#7f5df0',
	shadowOffset: {
	  width: 0,
	  height: 0,
	},
	shadowOpacity: 0.25,
	shadowRadius: 3.5,
	elevation: 5,
    }
  }, 
  stackBar: {
    headerStyle: {
      backgroundColor: secondary,
    },
    headerTintColor: four,
  },  
  container : {   
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    paddingTop: 20,
    paddingBottom: 120,
    backgroundColor: four,
  },   
  item : {   
    flex: 1,
    backgroundColor: primary,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 15,
    marginBottom: 0,
    alignSelf: 'stretch',
    borderRadius: 20,
    padding: 20,
  },  
  title : { 
    color: secondary,
    fontWeight: 'bold',
    fontSize: 20,
  },  
  subtitle : { 
    color: secondary,
    fontWeight: 'bold',
    fontSize: 15,
    paddingRight: 5,
    paddingLeft: 5,
  },



};

export default styles
