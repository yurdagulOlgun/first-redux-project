// {id,title,comments: [{id:1,userId:1,comment:"d"}], {votes:{up:0,down:0}}}

//ACTON TYPES
//ADD_POST, REMOVE_POST(id), UPDATE_POST(id), ADD_COMMENT(id,userId,comment), REMOVE_COMMENT(id),
//REMOVE_USER_COMMENT(userId), ADD_UP_VOTE(id), ADD_DOWN_VOTE(id)

const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const UPDATE_POST = "UPDATE_POST"; //ne yapması gerektiğini anlamadım
const ADD_COMMENT = "ADD_COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";
const REMOVE_USER_COMMENT = "REMOVE_USER_COMMENT";
const ADD_UP_VOTE = "ADD_UP_VOTE";
const ADD_DOWN_VOTE = "ADD_DOWN_VOTE";
//ACTION CREATORS
export const addPost = (id, title) => ({
  type: ADD_POST,
  payload: { id, title, comments: [], votes: { up: 0, down: 0 } },
});

export const removePost = (id) => ({
  type: REMOVE_POST,
  payload: id,
});

export const addUpVote = (id) => ({
  type: ADD_UP_VOTE,
  payload: id,
});

export const addDownVote = (id) => ({
  type: ADD_DOWN_VOTE,
  payload: id,
});

export const addComment = (id, userId) => ({
  type: ADD_COMMENT,
  payload: { comments: [{ id, userId, comment: "" }] },
});
//REDUCER
const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...posts, action.payload];
    case REMOVE_POST:
      return posts.filter((item) => item.id !== action.payload);
    case ADD_UP_VOTE:
      return posts.map((item) => {
        if (item.id === action.payload) {
          //if süslü parantezi
          return { ...item, votes: { ...item.votes, up: item.votes.up + 1 } }; //obje
        }
        return item;
      });
    case ADD_DOWN_VOTE:
      return posts.map((item) => {
        if (item.id === action.payload) {
          //if süslü parantezi
          return {
            ...item,
            votes: {
              ...item.votes,
              /*up: item.votes.up - 1 ,*/ down: item.votes.down + 1,
            },
          }; //obje
        }
        return item;
      });
    case ADD_COMMENT:
      return posts.map((item) => {
        
      });
    default:
      return posts;
  }
};

export default postsReducer;
