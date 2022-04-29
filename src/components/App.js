import React, {useReducer} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from '../reducers';
import EventForm from './EventForm';
import Events from './Events';
import AppContext from '../contexts/AppContext';

console.log({AppContext});

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  // console.log('App.js');
  // console.log({state});
  return (
    <AppContext.Provider value="Provider Sample!">
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch}></EventForm>
        <Events state={state} dispatch={dispatch}></Events>
      </div>
    </AppContext.Provider>
  );
}

App.defaultProps = {
  name : 'sample',
  price : 1000
}

export default App;
