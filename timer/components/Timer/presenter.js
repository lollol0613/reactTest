import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import Button from '../Button';
//import PButton from '../PButton';

function formatTime(time) {
    var minutes = Math.floor(time/60);
    time += minutes * 60
    var seconds = parseInt(time % 60, 10);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    return;
}

class Timer extends Component {
    componentWillReceiveProps(nextProps) {
        const currentProps = this.props;
        if(!currentProps.isPlaying && nextProps.isPlaying) {
            //start the interval
            const timerInterval = setInterval(() => {
                currentProps.addSecond();
            }, 1000);
            this.setState({
                timerInterval
            });
        } else if(currentProps.isPlaying && !nextProps.isPlaying){
            //stop the interval
            clearInterval(this.state.timerInterval);
        }
    }
    render(){
        const { isPlaying, elapsedTime, timerDuration, startTimer, restartTimer, addSecond } = this.props;
        return(
            <View style={styles.container}>
            <StatusBar barStyle={"light-content"}/>
                <View style={styles.upper}>
         <Text style={styles.TimeText}>{formatTime(timerDuration+elapsedTime)}</Text>
         </View>
      <View style={styles.lower}>
      <Button iconName="play-circle-o" onPress={startTimer} style={styles.button}/> 
        <Button iconName="stop-circle-o" onPress={restartTimer} style={styles.button}/>
        </View>
         </View>  
        );
    }
}
const styles=StyleSheet.create({
    container: { 
        flex:1,
        backgroundColor:'white'
    },
    upper: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        //backgroundColor:'skyblue'
    },
    lower: { 
        flex:1,
        flexDirection:'row',
        justifyContent:"space-around",
        alignItems:"center",
        //backgroundColor:'yellow'
    },
    TimeText: {
        fontSize:80,
        margin:10,
        fontWeight:'100',
        color:'#595757'
    },
    button: {
        
    }
})

export default Timer;