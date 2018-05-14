import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput} from 'react-native';

class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {isShowingText:true};

		//Toggle the state every second
		setInterval(() => {
			this.setState(previousState=>{
				return {isShowingText:!previousState.isShowingText};
			});
		}, 1000);
	}
	render() {
		let display = this.state.isShowingText ? this.props.text : '';
		return (
			<View>
				<Text style={styles.ttitle}></Text>
			</View>
		)
	}
}
const styles=StyleSheet.create({
	ttitle: {
		fontSize:15,
	} 
})
//skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => App);
export default Test;