import React from 'react';
import { DELETE_EVENT } from '../actions';

const CreateTBody = ({dispatchstate, event}) => {
  const id = event.id;
  const handleDeleteBtn = () => {
    const result = window.confirm(`イベント（${id}）を削除しますか？`)
    if (result) {
      dispatchstate({
        type: DELETE_EVENT,
        id
      }); 
    }
  }
  return  <tr>
            <td>{id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td><button type='button' className="btn btn-danger" onClick={handleDeleteBtn}>削除</button></td>
          </tr>
}

export default CreateTBody;