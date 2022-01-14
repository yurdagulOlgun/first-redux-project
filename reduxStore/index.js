import { combineReducers, createStore } from "redux";
import postsReducer from "./posts";
import counterReducer from "./counter";
import tasksReducer from "./tasks";

const rootReducer = combineReducers({
    counter: counterReducer,
    tasks: tasksReducer,
    posts: postsReducer,
})

const store = createStore(rootReducer);
export default store;