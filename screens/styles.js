const primary = 'rgba(120,174,20,1)'
const primaryS = '#E9F7CF'
const secondary = 'rgba(32,106,93,0.8)'
const secondaryS = 'rgba(32,106,93,0.8)'
const tertiary = 'rgba(255,204,41,0.8)'
const tertiaryS = 'rgba(255,204,41,0.8)'

const styles = {
  tabBar : {  
    inactiveTintColor: secondary,
    activeTintColor: tertiary,
    style: {
      position: 'absolute',
      height: 70,
      bottom: 15,
      left: 20,
      right: 20,
      elevation: 0,
      borderRadius: 15,
      backgroundColor: primary,
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
      backgroundColor: primary,
    },
    headerTintColor: primaryS,
  },
  container : {   
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    paddingTop: 15,
    paddingBottom: 100,
    backgroundColor: primaryS,
  }

};

export default styles
