import * as axios from "axios";

const SET_MOCK_INFO = 'SET_MOCK_INFO';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    mockInfo: {
    }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOCK_INFO:
      return {
        ...state,
        mockInfo: action.info
      };

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching}
    }

    default:
      return state;
  }
}

const setMockInfo = (info) => ({type: SET_MOCK_INFO, info: info})
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })


export const getMockInfo = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    axios.get(`https://api.publicapis.org/random`)
      .then(response => {
        dispatch(setMockInfo(response.data.entries[0]))
        dispatch(toggleIsFetching(false));
        console.log('rsp is ', response)
      }
    );
  }
}


export default mainReducer;