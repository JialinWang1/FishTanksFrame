import actions from './action';

const defaultRate = 2;
const defaultLevel = ['downer', 'center', 'upper'];
const defaultState = {
  tankList: {
    upper: [
      {
        height: 40,
        width: 40,
      },
    ],
    center: [],
    downer: [],
  },
  mainRate: defaultRate,
  maleHeight: 190,
  femaleHeight: 155,
  mainFrameBorder: 4,
  mainWidth: 196,
  mainHeight: 70,
};

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case actions.CHANGE_LEVEL_HEIGHT:
      return {
        ...state,
        mainHeight: action.data,
      };
    case actions.CHANGE_MAIN_RATE:
      return {
        ...state,
        mainRate: action.data,
      };
    case actions.CHANGE_MAIN_WIDTH:
      return {
        ...state,
        mainWidth: action.data,
      };
    case actions.RESIZE_HEIGHT: {
      const tankList = JSON.parse(JSON.stringify(state.tankList));
      const level = tankList[defaultLevel[action.data.level]];
      level[action.data.index].height = +action.data.change;

      return {
        ...state,
        tankList,
      };
    }
    case actions.RESIZE_WIDTH: {
      const tankList = JSON.parse(JSON.stringify(state.tankList));
      const level = tankList[defaultLevel[action.data.level]];
      level[action.data.index].width = +action.data.change;

      return {
        ...state,
        tankList,
      };
    }
    case actions.ADD_TANK: {
      const tankList = JSON.parse(JSON.stringify(state.tankList));
      tankList[defaultLevel[action.data.level]].push({ height: 30, width: 30 });
      return {
        ...state,
        tankList,
      };
    }
    default:
      break;
  }
  return state;
}

export default rootReducer;
