import * as axios from "axios";

const SET_USERS = 'SET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  users: [ ],
  isFetching: false
};

const contactsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching}
    }
    default:
      return state;
  }
}

export const setUsers = (users) => ({type: SET_USERS, users })
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })


export const getUsersData = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    axios.get(`https://randomuser.me/api/?page=1&results=10&seed=abc`)
      .then(response => {
          dispatch(setUsers(response.data.results))
          dispatch(toggleIsFetching(false));
          console.log('resp users ', response.data.results)
        }
      );
  }
}


export default contactsReducer;