import { configureStore } from "@reduxjs/toolkit";
import { dataApi, profileApi } from "@/api";
import { queryErrorLogger } from "@/api/queryErrorLogger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  toastReducer,
  interestReducer,
  skillReducer,
  questionnaireReducer,
  userInfoReducer,
} from "./features";
import accessibilityReducer from "./features/accessibility/accessibilitySlice";

const persistConfig = {
  key: "root",
  storage,
};
const persistedUserInfoReducer = persistReducer(persistConfig, userInfoReducer);
const persistedQuestionnaireReducer = persistReducer(
  persistConfig,
  questionnaireReducer
);
const persistedAccessibilityReducer = persistReducer(
  persistConfig,
  accessibilityReducer
);

export const store = configureStore({
  reducer: {
    interests: interestReducer,
    skills: skillReducer,
    questionnaire: persistedQuestionnaireReducer,
    userinfo: persistedUserInfoReducer,
    toast: toastReducer,
    accessibility: persistedAccessibilityReducer,
    [dataApi.reducerPath]: dataApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(dataApi.middleware, profileApi.middleware, queryErrorLogger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistedStore = persistStore(store);
