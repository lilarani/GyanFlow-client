import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name : 'loading',
    initialState : {loader : false} ,
    reducers : {
        setLoading : (state , action)=>{
            state.loader = action.payload 
        }
    }
})

export const setLoading = loadingSlice.actions.setLoading ;

export default loadingSlice.reducer ;




