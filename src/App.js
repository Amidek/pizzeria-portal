import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesEvent from './components/views/TablesEvent/TablesEvent';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';
import Kitchen from './components/views/Kitchen/Kitchen';
import Homepage from './components/views/Homepage/Homepage';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import store from './redux/store';
import { Provider } from 'react-redux';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    //secondary: { main: '#11cb5f' },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/panel'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout className="App">
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBooking} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBooking} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TablesEvent} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={TablesEvent} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrder} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterOrder} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;



      

