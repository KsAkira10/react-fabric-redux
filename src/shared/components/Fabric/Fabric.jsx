import React, { useEffect } from 'react';
import { fabric as fabricJs } from 'fabric';
import { useDispatch, connect } from 'react-redux';
import { fabricStart, canvasAdd, canvasRemove, canvasPreview } from '../../../actions';
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
          ADD Text
        </button>
        <button
          type="button"
          onClick={() => {
            const url =
              'https://kamizetaqasa.blob.core.windows.net/rchloplus/NossasEstampas/04-girl-power/RCHLO_04-girl-power-01%401199x1500.png';

            new fabricJs.Image.fromURL(
              url,
              (image) => {
                dispatch(canvasAdd(image));
              },
              {
                scaleX: 0.1,
                scaleY: 0.1,
                selectable: true,
                objectCaching: true,
                crossOrigin: 'Anonymous',
              },
            );
          }}
        >
          ADD Image
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(canvasRemove());
          }}
        >
          REMOVE
        </button>
      </header>
      <main>
        <canvas id={id} width={width} height={height} />
      </main>
      <footer>
        <button
          type="button"
          onClick={() => {
            dispatch(canvasPreview());
          }}
        >
          Preview
        </button>
      </footer>
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

export default connect(({ fabricState }) => ({ fabricState }), {
  fabricStart,
  canvasAdd,
  canvasRemove,
})(Fabric);
