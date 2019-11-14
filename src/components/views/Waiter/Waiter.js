import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.scss';
import { Link } from 'react-router-dom';

const Waiter = ({props}) => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link to='/order/new'>Nowe zamówienie</Link>
    <Link to='/order/:id'>Szczegóły zamówienia</Link>
  </div>
);

Waiter.propTypes = {
  props: PropTypes.string,
};

export default Waiter;