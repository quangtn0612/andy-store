import axios from 'axios'
import { GET_PASSPORTS, PASSPORTS_ERROR, GET_CHARMS, CHARMS_ERROR } from '../types';

export const getPassportCovers = () => async dispatch => {
    try{
        const res = await axios.get('https://andy-backend122.herokuapp.com/passports/')
        dispatch( {
            type: GET_PASSPORTS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: PASSPORTS_ERROR,
            payload: error,
        })
    }
}
export const getCharms = () => async dispatch => {
    try{
        const res = await axios.get('https://andy-backend122.herokuapp.com/charms/')
        dispatch( {
            type: GET_CHARMS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: CHARMS_ERROR,
            payload: error,
        })
    }
}

