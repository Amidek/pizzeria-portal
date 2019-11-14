import React from 'react';
import PropTypes from 'prop-types';
import styles from './Homepage.scss';

const Homepage = ({props}) => (
  <div className={styles.component}>
    <h2>Homepage view</h2>
  </div>
);

Homepage.propTypes = {
  props: PropTypes.string,
};

export default Homepage;