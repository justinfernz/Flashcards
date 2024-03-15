import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = { id, name, icon, quizIds: [] };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addQuiz, (state, action) => {
      const topicId = action.payload.topicId;
      const quizId = action.payload.id;
      state.topics[topicId].quizIds.push(quizId);
    });
  },
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
