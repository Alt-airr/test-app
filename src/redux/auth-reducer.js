import * as axios from "axios";
import {getMockInfo} from "./main-reducer";

const SET_ACCESS_KEY = 'SET_ACCESS_KEY';
const SET_USER_INFO = 'SET_USER_INFO';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const RD_CANCEL = 'RD_CANCEL';



let initialState = {
    isAuth: false,
    accessKey: null,
    isFetching: false,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {

        case SET_ACCESS_KEY: {
            return { ...state,
              userKey: action.key,
              isAuth: true,
              needRedirect: true,
             }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        case RD_CANCEL: {
          return { ...state, needRedirect: false}
        }
        case SET_USER_INFO: {
          return { ...state, userInfo: action.userInfo }
        }
        default:
            return state;
    }
}

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const setAccessKey = (key) => ({type: SET_ACCESS_KEY, key })
export const rdCancel = () => ({type: RD_CANCEL })
export const setUserInfo = (userInfo) => ({type: SET_USER_INFO, userInfo })


export const getAccessKey = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        axios.get(`https://randomuser.me/api/`)
          .then(response => {
              dispatch(toggleIsFetching(false));
              dispatch(setAccessKey(response.data.results[0].login.sha256));
              dispatch(setUserInfo(response.data.results[0]));

          });

      getMockInfo()
    }
}


export default authReducer;