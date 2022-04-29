import React, {useReducer} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from '../reducers';
import EventForm from './EventForm';
import Events from './Events';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  // console.log('App.js');
  // console.log({state});
  return (
    <React.Fragment>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch}></EventForm>
        <Events state={state} dispatch={dispatch}></Events>
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  name : 'sample',
  price : 1000
}

export default App;
