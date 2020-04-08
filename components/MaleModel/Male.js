import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import male from './male.png';
import './style.less';

const Male = ({ maleHeight }) => (
  <div className="male-height">
    <img className="male" alt="" height={maleHeight} src={male} />
  </div>
);

Male.propTypes = {
  maleHeight: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => state;
// const mapDispatchToProps = (dispatch) => {
//   return {
//   };
// };

export default connect(mapStateToProps)(Male);
