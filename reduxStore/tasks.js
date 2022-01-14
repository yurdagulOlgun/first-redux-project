import { createStore } from "redux";

//ACTION TYPES
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";

//ACTION CREATORS


export const addTask = (id, title) => ({
    type: ADD_TASK,
    payload: { id, title }, //{id:id,title:title}
  });
  
 export const removeTask = (id) => ({
    type: REMOVE_TASK,
    payload: id,
  });
  
  const tasksReducer = (tasks = [], action) => {
    switch (action.type) {
      case ADD_TASK:
        return [...tasks, action.payload]
      case REMOVE_TASK: //içinde id 'si 1 olmayanları getir
        return tasks.filter(item => item.id !== action.payload); 
      default:
        return tasks;
    }
  };



  export default tasksReducer;