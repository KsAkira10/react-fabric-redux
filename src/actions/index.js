import {
  FABRIC_START,
  FABRIC_STARTED,
  CANVAS_ADD,
  CANVAS_ADDED,
  CANVAS_REMOVE,
  CANVAS_REMOVED,
} from '../constants';

export const fabricStart = payload => ({ type: FABRIC_START, payload });
export const fabricStarted = ({ payload }) => ({ type: FABRIC_STARTED, payload });

export const canvasAdd = payload => ({ type: CANVAS_ADD, payload });
export const canvasAdded = ({ payload }) => ({ type: CANVAS_ADDED, payload });
export const canvasRemove = payload => ({ type: CANVAS_REMOVE, payload });
export const canvasRemoved = ({ payload }) => ({ type: CANVAS_REMOVED, payload });
