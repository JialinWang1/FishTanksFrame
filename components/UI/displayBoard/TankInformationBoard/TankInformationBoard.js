/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import actions from '../../../../action';
import TankDetail from './TankDetail/TankDetail';
import './style.less';

const TankInformationBoard = ({ tankList, addTank }) => (
  <div className="tank-information">
    <div>
      <span>Upper:</span>
      {tankList.upper.map((tank, index) => (
        <TankDetail index={index} level={2} tank={tank} key={index} />
      ))}
      <button
        onClick={() => {
          addTank(2);
        }}
        type="button"
        className="add-tank"
      >
        +
      </button>
    </div>

    <div>
      <span>Center:</span>
      {tankList.center.map((tank, index) => (
        <TankDetail index={index} level={1} tank={tank} key={index} />
      ))}
      <button
        onClick={() => {
          addTank(1);
        }}
        type="button"
        className="add-tank"
      >
        +
      </button>
    </div>
    <div>Donwer: </div>
  </div>
);
TankInformationBoard.propTypes = {
  tankList: PropTypes.objectOf(Array).isRequired,
  addTank: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  addTank: (level) => {
    dispatch({ type: actions.ADD_TANK, data: { level } });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TankInformationBoard);
