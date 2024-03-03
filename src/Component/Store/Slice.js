import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name:"task",
    initialState:{
     isAuth:false,
     isFill:false,
     arr: []
    },

    reducers:{
      updateFill:(state,action)=>{
        state.isFill = action.payload
      },
      updateAuth:(state,action)=>{
        state.isAuth = action.payload
      },
      updateArr:(state,action)=>{
          state.arr = action.payload
       }
    }
})
export default Slice.reducer

export const {updateFill,updateAuth,updateArr} = Slice.actions