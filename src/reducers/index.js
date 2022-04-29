import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENT } from "../actions";
const events = (state = [], action) => {
  /**
   * state には"共通で管理しているデータが入っている"
   * action には dispatch で指定した
   *  'type' と他のメンバー（今回は id, title, body のどれか）が渡される
   */
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case CREATE_EVENT:
      const event = {title: action.title, body:action.body};
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, {id, ...event}];
    case DELETE_EVENT:
      // event には filter で処理する配列の各要素が格納される
    return state.filter(event => event.id !== action.id);
    case DELETE_ALL_EVENT:
      return [];
    default:
      return state;
  }
}

export default events;