import React from 'react';
import PropTypes from 'prop-types';
import styles from './WaiterOrder.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: '1', menu: 'menu', options: 'options',  orderDetails: 'cola', orderValue: '$45'},
  {id: '2', menu: 'menu', options: 'options', orderDetails: 'ciasto', orderValue: '$230'},
  {id: '3', menu: 'menu', options: 'options', orderDetails: 'pizza', orderValue: '$23'},
  {id: '4', menu: 'menu', options: 'options', orderDetails: 'pączek', orderValue: '$90'},
  {id: '5', menu: 'menu', options: 'options', orderDetails: '2x pizza', orderValue: '$56'},
  {id: '6', menu: 'menu', options: 'options', orderDetails: 'woda z chlebem', orderValue: '$67'},
];

const WaiterOrder = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Menu</TableCell>
          <TableCell>Options</TableCell>
          <TableCell>Order Details</TableCell>
          <TableCell>Order Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.menu && (
                <Button to='menu'>
                  {row.menu}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.options && (
                <Button to='options'>
                  {row.options}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.orderDetails}
            </TableCell>
            <TableCell>
              {row.orderValue}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

WaiterOrder.propTypes = {
  props: PropTypes.string,
};

export default WaiterOrder;