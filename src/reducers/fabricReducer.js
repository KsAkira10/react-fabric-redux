import {
  FABRIC_START,
  FABRIC_STARTED,
  CANVAS_ADD,
  CANVAS_ADDED,
  CANVAS_REMOVED,
  CANVAS_REMOVE,
} from '../constants';

const initialState = {
  canvas: null,
};

const fabricReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FABRIC_STARTED:
      return { ...state, ...payload };
    case CANVAS_REMOVED:
      state.canvas.remove(state.canvas.getActiveObject());
      return { ...state };
    case CANVAS_REMOVE:
      return { ...state };
    case CANVAS_ADDED:
      state.canvas.add(payload);
      return { ...state };
    case CANVAS_ADD:
      return { ...state };
    case FABRIC_START:
    default:
      return state;
  }
};

export default fabricReducer;
