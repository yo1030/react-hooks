import React, { useState } from 'react';

const App = (props) => {
  // setState に state 以外の変数が指定されたとき、変更前の state の値が入る？
  const [state, setState] = useState(props);
  const reset = () => {
    setState(props);
  }
  /**
   * state には name と price のプロパティがあると仮定する
   * state: {
   *  name: ---,
   *  price: ---
   * }
   * {...state, price: state.price + 1} ---1
   * このとき 1 のオブジェクトは瞬間的に
   * {
   *  name: ---,
   *  price: ---,
   *  price: ---
   * }
   * となり、price プロパティが複数存在することになる
   * このとき、後から追加されたものが優先される
   * 結果として、後に記載した "price:~" で値を更新することになる
   */

  return (
    <React.Fragment>
      <p>現在の{state.name}は、{state.price}です。</p>
      <button onClick={() => setState({...state, price: state.price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: state.price - 1})}>-1</button>
      <button onClick={() => setState(prevState => ({...prevState, price: prevState.price + 1}))}>+1</button>
      <button onClick={() => setState(prevState => ({...prevState, price: prevState.price - 1}))}>-1</button>
      <button onClick={reset}>Reset</button>
      <input type="text" value={state.name} onChange = {e => setState({...state, name: e.target.value})} />
    </React.Fragment>
  );
}

App.defaultProps = {
  name : 'sample',
  price : 1000
}

export default App;
