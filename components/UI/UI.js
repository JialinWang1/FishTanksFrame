import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './style.less';
import Male from '../MaleModel/Male';
import Female from '../FemaleModel/Female';
import MainFrame from '../MainFrame/MainFrame';
import DiaplayBoard from './displayBoard/displayBoard';

const UI = ({ mainRate }) => {
  const [dropped, setDropped] = useState(true);
  return (
    <div className="UI">
      <div className={`controller ${dropped ? 'extended' : 'folded'}`}>
        <DiaplayBoard />

        <button
          type="button"
          className="drop-down"
          onClick={() => setDropped(!dropped)}
        >
          -
        </button>
      </div>
      <div
        style={{
          transform: `scale(${mainRate})`,
        }}
        className="contianer"
      >
        <MainFrame />
        <Female />
        <Male />
      </div>
    </div>
  );
};

UI.propTypes = {
  mainRate: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(UI);
