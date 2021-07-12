import axios from 'axios'

export const getWallets = () => async dispatch => {
    try{
        const res = await axios.get('https://andy-backend122.herokuapp.com/wallets/')
        dispatch( {
            type: 'GET_WALLETS',
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: 'WALLETS_ERROR',
            payload: error,
        })
    }

}