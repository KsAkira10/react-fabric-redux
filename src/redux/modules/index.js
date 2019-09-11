import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import fabricEpic, { canvasAddEpic, canvasRemoveEpic } from '../../epics/fabricEpic';
import fabricReducer from '../../reducers/fabricReducer';

export const rootEpic = combineEpics(fabricEpic, canvasAddEpic, canvasRemoveEpic);

export const rootReducer = combineReducers({
  fabricState: fabricReducer,
});
