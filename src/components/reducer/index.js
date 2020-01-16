import { ADD, REMOVE, COMPLETED } from '../action/index';

const todoApp = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];

    case REMOVE:
      return state.filter(item => item.id !== action.id);

    case COMPLETED:
      return state.map(item => item.id === action.id ?
        { ...item, completed: !item.completed } : item
      );

    default:
      return state;
  }
};

export default todoApp;