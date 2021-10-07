import React, { useEffect } from 'react';
import { fabric as fabricJs } from 'fabric';
import { useDispatch, connect } from 'react-redux';
import { fabricStart, canvasAdd, canvasRemove } from '../../../actions';
import { string } from 'prop-types';
import './Fabric.css';

const Fabric = ({ id, width, height, fabricState }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fabricStart({ canvas: new fabricJs.Canvas(id) }));
  }, [dispatch, id]);

  return (
    <article className="container">
      <header className="my-3">
        <button
          type="button"
          onClick={() => {
            dispatch(canvasAdd(new fabricJs.Text('Teste Me!')));
          }}
        >
          ADD
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(canvasRemove(new fabricJs.Text('Teste Me!')));
          }}
        >
          REMOVE
        </button>
      </header>
      <main>
        <canvas id={id} width={width} height={height}></canvas>
      </main>
    </article>
  );
};

Fabric.propTypes = {
  id: string,
  width: string,
  height: string,
};

Fabric.defaultProps = {
  id: 'canvas',
  width: '300',
  height: '300',
};

export default connect(
  ({ fabricState }) => ({ fabricState }),
  { fabricStart, canvasAdd, canvasRemove },
)(Fabric);
