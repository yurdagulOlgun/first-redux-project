import store from "./reduxStore"
import {increment,decrement} from "./reduxStore/counter"
import { addComment, addDownVote, addPost, addUpVote, removePost } from "./reduxStore/posts";
import {addTask,removeTask} from "./reduxStore/tasks"

store.subscribe(() => console.log(store.getState()));


//STORE


store.dispatch(increment(10));
store.dispatch(decrement(5));

store.dispatch(addTask(1, "Cagla"));
store.dispatch(addTask(2, "Gamze"));
store.dispatch(removeTask(1)); // id=1 olan task gelmedi

store.dispatch(addPost(1,"denemepost"))
store.dispatch(addPost(2,"ikinci post"))
store.dispatch(removePost(1)) // id=1 olan postu detirmedi

store.dispatch(addUpVote(2)); //id=2 olan postun votes değerini 1 arttırır (1)
store.dispatch(addUpVote(2)); //id=2 olan postun votes değerini 1 arttırır (2)
store.dispatch(addUpVote(2)); //id=2 olan postun votes değerini 1 arttırır (3)
store.dispatch(addDownVote(2)); //id=2 olan postun votes değerini 1 azaltır (3-1=2) yada up aynı kalır down 1 artar 

store.dispatch(addComment(2,"lala"))

// console.log(store.getState().posts[0].votes);