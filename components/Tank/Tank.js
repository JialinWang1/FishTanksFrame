import React from 'react';
import { PropTypes } from 'prop-types';
import './style.less';

function Tank({ width, height }) {
  return <div className="tank" style={{ height: `${height}px`, width: `${width}px` }} />;
}

Tank.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

Tank.defaultProps = {
  height: 40,
  width: 60,
};
export default Tank;
