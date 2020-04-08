import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import female from './female.png';
import './style.less';

const Female = ({ femaleHeight }) => (
  <div className="female-height">
    <img
      className="female"
      alt=""
      height={femaleHeight}
      src={female}
    />
  </div>
);

Female.propTypes = {
  femaleHeight: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => state;
// const mapDispatchToProps = (dispatch) => {
//   return {
//   };
// };

export default connect(mapStateToProps)(Female);
