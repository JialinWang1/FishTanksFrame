/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import actions from '../../../../action';
import './style.less';

const BasicInformationBoard = ({
  tankList,
  maleHeight,
  femaleHeight,
  mainFrameBorder,
  mainWidth,
  mainHeight,
  mainRate,
  changeParam,
}) => {
  const [mainHeightInput, setMainHeight] = useState(mainHeight);
  const [mainWidthInput, setMainWidth] = useState(mainWidth);
  const [mainRateInput, setMainRate] = useState(mainRate);

  return (
    <div className="basic-information">
      <div>
        Level Height:
        <input
          className="diaplay-input"
          onChange={() => setMainHeight()}
          onBlur={(e) => changeParam(e.target.value, actions.CHANGE_LEVEL_HEIGHT)}
          value={mainHeightInput}
        />
        cm
      </div>

      <div>
        Main Rate:
        <input
          className="diaplay-input"
          onChange={() => setMainRate()}
          onBlur={(e) => changeParam(e.target.value, actions.CHANGE_MAIN_RATE)}
          value={mainRateInput}
        />
      </div>

      <div>
        Main Width:
        <input
          className="diaplay-input"
          onChange={() => setMainWidth()}
          onBlur={(e) => {
            changeParam(e.target.value, actions.CHANGE_MAIN_WIDTH);
          }}
          value={mainWidthInput}
        />
        cm
      </div>

      <div>{`Male Height: ${maleHeight} cm`}</div>
      <div>{`Female Height: ${femaleHeight} cm`}</div>
      <div>{`Main Frame Border: ${mainFrameBorder} cm`}</div>
      <div>
        {`Tank Quantity: ${tankList.upper.length
          + tankList.center.length
          + tankList.downer.length}`}
      </div>
    </div>
  );
};

BasicInformationBoard.propTypes = {
  tankList: PropTypes.objectOf(Array).isRequired,
  maleHeight: PropTypes.number.isRequired,
  femaleHeight: PropTypes.number.isRequired,
  mainFrameBorder: PropTypes.number.isRequired,
  mainWidth: PropTypes.number.isRequired,
  mainHeight: PropTypes.number.isRequired,
  mainRate: PropTypes.number.isRequired,
  changeParam: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  changeParam: (data, type) => {
    dispatch({ type, data: +data });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BasicInformationBoard);
