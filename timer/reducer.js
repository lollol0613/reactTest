//Import

//Actions
//Create variables
const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';

//Action Creators

function startTimer() {
    return{
        type: START_TIMER
    }
}
function restartTimer() {
    return{
        type:RESTART_TIMER
    }
}
function addSecond() {
    return{
        type:ADD_SECOND
    }
}

//Reducer
const TIMER_DURATION = 0;

const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIMER_DURATION
};
//(state, action) => state 형태의 기본
function reducer(state = initialState, action) {
    switch(action.type) {
        case START_TIMER:
            return applyStartTimer(state, action);
        case RESTART_TIMER:
            return applyRestartTimer(state, action);
        case ADD_SECOND:
            return applyAddSecond(state, action);
        default:
            return state;
    }
}
//Reducer Functions

function applyStartTimer(state, action){
    const { elapsedTime } = state;
    return {
        ...state, //current state
        isPlaying:true,
        elapsedTime: elapsedTime + 1
    };
}
function applyRestartTimer(state, action){
    return {
        ...state,
        isPlaying:false,
        elapsedTime: 0
    }
}
function applyAddSecond(state, action){
    const { elapsedTime } = state;
    if(TIMER_DURATION < elapsedTime) {
        return{
            ...state,
            elapsedTime: elapsedTime + 1 //current Time + 1
        };
    }else {
        return {
            ...state,
            isPlaying: false // Stop with the playing
        };
    }
}

//Export Action Creators

const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
};

//Export Reducer
export { actionCreators };
export default reducer;