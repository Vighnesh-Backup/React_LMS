// import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

// const createThunk = createAsyncThunk("admin/create", async(formData)=>{
//     try{
//         const result  = await checkMail(formData);
//         return result ;

//     }catch(e){
//         rejectwithValue
//     }
// })

// const adminSlice = createSlice({
//     name:"adminUser",
//     initialState :{
//         loading:false,
//     },

//     extraReducers:(builder)=>{
//         builder.addCase(createthunk.pending,(state ,action)=>{
//             state.loading = true ;
//         })
//         builder.addCase(createThunk.fulfilled,(state,action)=>{

//             state.loading = false ;
//         })
//         builder.addCase(createThunk.)
//     },
// });

// export default adminSlice.reducer ;