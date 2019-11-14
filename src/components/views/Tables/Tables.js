import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.scss';
import { Link } from 'react-router-dom';

const Tables = ({props}) => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to='/booking/:id'>Rezerwacje</Link>
    <Link to='/booking/new'>Nowa rezerwacja</Link>
    <Link to='/events/:id'>Eventy</Link>
    <Link to='/events/new'>Nowe eventy</Link>
  </div>
);

Tables.propTypes = {
  props: PropTypes.string,
};

export default Tables;