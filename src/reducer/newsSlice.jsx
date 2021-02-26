import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';  

export const fetchApi=createAsyncThunk('fetch/newApi',async(type)=>{
    return await fetch(`https://newsapi.org/v2/everything?q=${type}&apiKey=[YourApiKey]`).then((res)=>
        res.json()
      
    )
})
export const slice=createSlice({
    name:"newApi",
    initialState:{
        data:[],
        status:null
    },
    reducers:{
    },
    extraReducers:{
        [fetchApi.pending]:(state,action)=>{
            state.status='loading'
        },
        [fetchApi.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.data=payload.articles;
        },
        [fetchApi.rejected]:(state,action)=>{
            state.status='failed'
        }
    }

})

export const {getApi} = slice.actions;


export const getData=state=>state.news;

export default slice.reducer