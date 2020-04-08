import React from 'react';
import { connect } from 'react-redux';
import BasicInformationBoard from './BasicInformationBoard/BasicInformationBoard';
import TankInformationBoard from './TankInformationBoard/TankInformationBoard';
import './style.less';

const DiaplayBoard = () => (
  <div className="display-frame">
    <BasicInformationBoard />
    <TankInformationBoard />
  </div>
);

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(DiaplayBoard);
