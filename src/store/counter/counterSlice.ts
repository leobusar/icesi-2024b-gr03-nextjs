import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface  CounterState {
    value: number, 
    initialized: boolean
}

const initialState: CounterState = {
    value: 0,
    initialized: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        initCount: (state, action: PayloadAction<number>) => {
            state.value = action.payload; 
            state.initialized = true
        }, 
        increment:  (state) => {
            state.value +=1;
        }, 
        decrement:  (state) => {
            state.value -=1;
        }
    }
});

export  const {increment, decrement, initCount} = counterSlice.actions; 

export default counterSlice.reducer;
