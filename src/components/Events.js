import React, {useContext} from 'react';
import CreateTBody from './CreateTBody';
import AppContext from '../contexts/AppContext';

const Events = ({state, dispatch}) => {
  const value = useContext(AppContext);
  console.log(value);
  return (
    <React.Fragment>
      <h4>イベント一覧</h4>
      <table className='table table-hover'>
        <thead>
          <tr key="">
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((e, index) => (<CreateTBody key={index} event={e} dispatchstate={dispatch} />))}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Events;