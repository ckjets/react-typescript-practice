import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';



interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

// ③ slice reducer を createSliceで作成する
export const counterSlice = createSlice({
  // Sliceを識別する名前と、初期値、Reducers関数が1つ以上必須
  name: 'counter', 
  initialState, 

  // reducers関数は、イミュータブルにstateを変更する？
  reducers: {
    counter: counterReducer => {
      
    },
    // type: counter/increment
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Reducers関数をセットする
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount: number): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};


export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
