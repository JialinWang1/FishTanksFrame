/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import action from '../../../../../action';
import './style.less';

const TankDetail = ({ index, level, tank, resize, deleteTank }) => {
  const [tankHeight, setTankHeight] = useState(tank.height);
  const [tankWidth, setTankWidth] = useState(tank.width);
  return (
    <div className="tank-detail">
      <input
        className="input-width"
        value={tankWidth}
        onChange={(e) => setTankWidth(e.target.value)}
        onBlur={(e) =>
          resize(e.target.value, index, level, action.RESIZE_WIDTH)
        }
      />
      <span>X</span>
      <input
        className="input-height"
        value={tankHeight}
        onChange={(e) => setTankHeight(e.target.value)}
        onBlur={(e) =>
          resize(e.target.value, index, level, action.RESIZE_HEIGHT)
        }
      />
      <button
        onClick={() => {
          deleteTank(index, level);
        }}
        type="button"
        className="delete-tank"
      >
        x
      </button>
    </div>
  );
};
TankDetail.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tank: PropTypes.object.isRequired,
  resize: PropTypes.func.isRequired,
  deleteTank: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  resize: (change, index, level, type) => {
    dispatch({ type, data: { index, change, level } });
  },
  deleteTank: (index, level) => {
    dispatch({ type: action.DELETE_TANK, data: { index, level } });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TankDetail);
