import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// Sliceで定義した
import counterReducer from '../features/counter/counterSlice';

// ① configureStoreでReduxストアを作成する
export const store = configureStore({
  // stateを受ける場所。storeに更新する
  reducer: {
    // 名前付き引数としてReducer関数を受け入れる
    counter: counterReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
