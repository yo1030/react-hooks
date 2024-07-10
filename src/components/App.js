import React, { useEffect, useReducer} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from '../reducers';
import EventForm from './EventForm';
import Events from './Events';
import OperationLogs from './OperationLogs';
import AppContext from '../contexts/AppContext';

const APP_KEY = 'appWithRedux';

const App = () => {
  const appState = localStorage.getItem(APP_KEY);
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log('App.js');
  // console.log({state});
  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  },[state])
  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
}

App.defaultProps = {
  name : 'sample',
  price : 1000
}

export default App;
