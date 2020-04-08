/* eslint-disable react/no-array-index-key */

import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './style.less';
import Tank from '../Tank/Tank';

const MainFrame = ({
  mainWidth, mainHeight, mainFrameBorder, tankList,
}) => {
  const style = {
    borderWidth: `${mainFrameBorder}px`,
    height: `${mainHeight}px`,
    width: `${mainWidth}px`,
  };

  return (
    <div className="main-frame">
      <div className="upper">
        {tankList.upper.map((tank, index) => (
          <div key={index} className="cell">
            <Tank width={tank.width} height={tank.height} />
          </div>
        ))}
      </div>
      <div className="center" style={style}>
        {tankList.center.map((tank, index) => (
          <div key={index} className="cell">
            <Tank width={tank.width} height={tank.height} />
          </div>
        ))}
      </div>
      <div className="downer" style={style}>
        {tankList.downer.map((tank, index) => (
          <div key={index} className="cell">
            <Tank width={tank.width} height={tank.height} />
          </div>
        ))}
      </div>
    </div>
  );
};

MainFrame.propTypes = {
  tankList: PropTypes.objectOf(Array).isRequired,
  mainWidth: PropTypes.number.isRequired,
  mainHeight: PropTypes.number.isRequired,
  mainFrameBorder: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(MainFrame);
