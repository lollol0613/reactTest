import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions } from 'react-native';
import Test from './components/Test';
//import Button from './components/Button';
//import PButton from './components/PButton';
import Timer from './components/Timer';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';//Provider 불러오기, 루트 컴포넌트 감싸줌
//import { bindActionCreators } from 'redux';

let store = createStore(reducer);

//console.log(store.getState());

const {width, height} = Dimensions.get('window');

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.timertitle}>TIMER</Text>
      <Provider store={store}>
      <Timer />
      </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:'blue'
  },
  /*buttonwrap: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    width:width-20,
    //backgroundColor:'red'
  },*/
  timertitle: {
    fontSize:70,
    marginTop:50,
    fontWeight:'100',
    //textDecorationLine:'underline',
    color:'#ccc',
    //backgroundColor:'green'
  }
});
export default App;