import { map, tap } from 'rxjs/operators';
import { FABRIC_START, CANVAS_ADD, CANVAS_REMOVE } from '../constants';
import { fabricStarted, canvasAdded, canvasRemoved } from '../actions';

const fabricEpic = action$ =>
  action$.ofType(FABRIC_START).pipe(
    tap(console.log),
    map(fabricStarted),
  );

export const canvasAddEpic = action$ =>
  action$.ofType(CANVAS_ADD).pipe(
    tap(console.log),
    map(canvasAdded),
  );
export const canvasRemoveEpic = action$ =>
  action$.ofType(CANVAS_REMOVE).pipe(
    tap(console.log),
    map(canvasRemoved),
  );

export default fabricEpic;
