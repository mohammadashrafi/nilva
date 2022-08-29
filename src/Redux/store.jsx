import { configureStore } from "@reduxjs/toolkit";
import postList from "./PostList"

export const store= configureStore({
    reducer:{
        dataList:postList
    }
})