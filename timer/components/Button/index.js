import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const {width, height} = Dimensions.get('window');//device scale

function Button({ iconName, onPress }){
	return(
		<TouchableOpacity onPressOut={onPress}>
			<FontAwesome name={iconName} size={80} color="#595757"/>
			</TouchableOpacity>
	);
}

Button.propTypes = {
	iconName : PropTypes.string.isRequired,
	onPress : PropTypes.func.isRequired
};
/*class Button extends Component{
	render(){
		return(
			<TouchableOpacity
				style={styles.Button}
				//onPressOut={() => alert("hi")}
				onPressOut={this._test}
				>
				<Text style={styles.btnText}>{this.props.title}</Text>
				<Ionicons name="md-checkmark-cirle" size={32} color="green"/>s
				</TouchableOpacity>
		)
	}
	_test=()=> {
		alert("test");
	}
}
const styles=StyleSheet.create({//변경되면 안될 때 const 로 함. StyleSheet 도 Component임
Button: {
	height:50,
	//height: height -40,
    borderWidth:1,
    borderRadius:5,
    borderColor:'#595757',
	alignItems:'center',
	backgroundColor:'#595757',
    padding:10,
    margin:10,
    flex:1
  },
  btnText: {
	  color:'white',
	  fontSize:25,
	  fontWeight:"400",
	  textAlign:'center',
	  alignItems:'center',
  },
})*/
const style = StyleSheet.create({
	container: {
		height: 100,
		width: 100
	}

});
export default Button;