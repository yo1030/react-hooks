import React, {useReducer} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from '../reducers';
import EventForm from './EventForm';
import Events from './Events';
import AppContext from '../contexts/AppContext';

const App = () => {
  const initialState = {
    events: []
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log('App.js');
  // console.log({state});
  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container-fluid">
        <EventForm></EventForm>
        <Events></Events>
      </div>
    </AppContext.Provider>
  );
}

App.defaultProps = {
  name : 'sample',
  price : 1000
}

export default App;
