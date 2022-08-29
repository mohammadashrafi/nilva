import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getFixture } from "../service/Request";
import {fakeData} from "../service/FakeData"
export const postData=createAsyncThunk('posts',async()=>{

const {data}=await getFixture()
return data

})




const initialState={
    post:fakeData,
    loading:false,
    errorMassage:null
}




const postList=createSlice({
    name:"DataList",
    initialState,
    extraReducers:{
        [postData.fulfilled]:(state,action)=>{
            state.post=action.payload
            state.loading=false
        },
        [postData.pending]:(state,action)=>{
           
            state.loading=true
        },
        [postData.rejected]:(state,action)=>{
            state.errorMassage='wrang request'
            state.loading=false
        },


    }
})

export default postList.reducer