import React, {useContext} from 'react';
import {
  DELETE_EVENT,
  ADD_OPERATION_LOG
} from '../actions';
import { timeCurrentIso8601 } from '../utils';
import AppContext from '../contexts/AppContext';

const CreateTBody = ({event}) => {
  const {dispatch} = useContext(AppContext);
  const id = event.id;
  const handleDeleteBtn = () => {
    const result = window.confirm(`イベント（${id}）を削除しますか？`)
    if (result) {
      dispatch({
        type: DELETE_EVENT,
        id
      });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント（${id}）を削除しました。`,
        operatedAt: timeCurrentIso8601()
      })
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