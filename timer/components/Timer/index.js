import { connect } from 'react-redux';
import Timer from './presenter';
import { bindActionCreators } from 'redux';
import { actionCreators as tomatoActions } from '../../reducer';

function mapStateToProps(state) {
    const { isPlaying, elapsedTime, timerDuration } = state;
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    };
} //copy the props in the container

function mapDispatchToProps(dispatch) {
    // dispatch is the fucntion that sends their function to our reducer
    // 'action' 을 'store'에 던져주는데 액션은 필수적으로 type 값을 가지고 있어야 한다
    return {
        startTimer:bindActionCreators(tomatoActions.startTimer, dispatch),
        restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
        addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Timer);//mapStateToProps to Timer