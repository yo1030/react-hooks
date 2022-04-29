import React, {useState} from "react";
// import reducer from '../reducers';
import {CREATE_EVENT, DELETE_ALL_EVENT} from '../actions';

const EventForm = ({state, dispatch}) => {
  // state を App.js と別に独立して作成してしまう
  // この方法だと EventForm の変更が App に反映されない
  // const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  // console.log('EventForm');
  // console.log({state});
  /**
   * console.log を addEvent の中と外に記載した場合で state の内容が異なる
   * dispatch は非同期処理のため 1 では変更前の state が出力される
   * dispatch により state が変更されると再度レンダリングが行われ
   * 2 の console.log が実行される
   */
  const addEvent = e => {
    e.preventDefault();
    // dispatch は非同期処理
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    })
    setTitle('');
    setBody('');
    // console.log({state});  ---1
  }
  // console.log({state});   // ---2
  const deleteAllEvent = e => {
    e.preventDefault();
    const result = window.confirm('全てのイベントを削除しても良いですか？');
    if (result) dispatch({ type: DELETE_ALL_EVENT});
  }

  const creatable = (title === '' || body === '');
  const allDeletable = (state.length === 0);
  return (
    <React.Fragment>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor='formEventTitle'>タイトル</label>
          <input type="text" className='form-control' id='formEventTitle' value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor='formEventBody'>ボディー</label>
          <textarea type="text" className='form-control' id='formEventBody' value={body} onChange={e => setBody(e.target.value)} ></textarea>
        </div>
        <button className='btn btn-primary' onClick={addEvent} disabled={creatable}>イベントを作成する</button>
        <button className='btn btn-danger' onClick={deleteAllEvent} disabled={allDeletable}>全てのイベントを削除する</button>
      </form>
    </React.Fragment>
  )
}

export default EventForm;