import { configureStore, createSlice } from "@reduxjs/toolkit";

const popularVideo = createSlice({
  name: "popularVideo",
  initialState: [],
  reducers: {
    setPopularVideo(state, videoList) {
      return [...videoList.payload];
    },

    setLike(state, action) {
      state[action.payload.tempListIndex].isLike = action.payload.isLike;
    },

    setDislike(state, action) {
      state[action.payload.tempListIndex].isDislike = action.payload.isDislike;
    },

    setSubscribe(state, action) {
      state[action.payload.tempListIndex].isSubscribed = action.payload.isSubscribed;
    },
  },
});

export let { setPopularVideo, setLike, setDislike, setSubscribe } = popularVideo.actions;

const subscribeListSlice = createSlice({
  name: "subscribeListSlice",
  initialState: [],
  reducers: {
    addSubscribe(state, action) {
      return [...state, action.payload];
    },
  },
});

export let { addSubscribe } = subscribeListSlice.actions;

export default configureStore({
  reducer: {
    popularVideo: popularVideo.reducer,
    subscribeListSlice: subscribeListSlice.reducer,
  },
});
