import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesEvent.scss';

const TablesEvent = ({props}) => (
  <div className={styles.component}>
    <h2>Tables Event</h2>
  </div>
);

TablesEvent.propTypes = {
  props: PropTypes.string,
};

export default TablesEvent;