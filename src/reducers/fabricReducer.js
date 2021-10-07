import {
  FABRIC_START,
  FABRIC_STARTED,
  CANVAS_ADD,
  CANVAS_ADDED,
  CANVAS_REMOVED,
  CANVAS_REMOVE,
  CANVAS_PREVIEW,
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
    case CANVAS_PREVIEW:
      state.canvas.clone((clonedInstance) => {
        const newWidthPanel = 1600;
        const newHeightPanel = 2156;
        const defaultHeight = state?.canvas?.getHeight();
        const defaultWidth = state?.canvas?.getWidth();
        clonedInstance.setWidth(newWidthPanel);
        clonedInstance.setHeight(newHeightPanel);
        const canvasObjectsLayer = clonedInstance.getObjects() || [];
        // clonedInstance.remove(canvasObjectsLayer[0]);
        canvasObjectsLayer.forEach((object) => {
          const { left, top, width, height } = object.getBoundingRect();
          const requiredWidth = (width * newWidthPanel) / defaultWidth;
          const requiredHeight = (height * newHeightPanel) / defaultHeight;
          object
            .set({
              left: (left * newWidthPanel) / defaultWidth,
              top: (top * newHeightPanel) / defaultHeight,
              scaleX: requiredWidth / object?.width,
              scaleY: requiredHeight / object?.height,
            })
            .setCoords();
        });
        clonedInstance.renderAll();
        const canvasCloneUrl = clonedInstance.toDataURL({
          format: 'png',
          enableRetinaScaling: true,
        });
        console.log(canvasCloneUrl);
      });
      return { ...state };
    case FABRIC_START:
    default:
      return state;
  }
};

export default fabricReducer;
