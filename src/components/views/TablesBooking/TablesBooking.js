import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesBooking.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const TablesBooking = () => (
  <Paper className={styles.component}>
    <Button><Link to='/tables'>Powrót</Link></Button>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Other</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>

      </TableBody></Table>
    
  </Paper>
);

TablesBooking.propTypes = {
  props: PropTypes.string,
};

export default TablesBooking;