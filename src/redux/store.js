import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import authReducer from "./Auth/authReducer";
import productReducer from "./Product/productReducer";
import catalogReducer from "./Catalog/catalogReducer";
import reviewReducer from "./Review/reviewReducer";
import { filterReducer } from "./Filter/slice";

const authPersistConfig = {
  key: "auth",
  storage,
};

const productsPersistConfig = {
  key: "products",
  storage,
};

const catalogsPersistConfig = {
  key: "catalogs",
  storage,
};

const reviewsPersistConfig = {
  key: "reviews",
  storage,
};

const persistedReducerAuth = persistReducer(authPersistConfig, authReducer);
const persistedReducerProducts = persistReducer(
  productsPersistConfig,
  productReducer
);
const persistedReducerCatalogs = persistReducer(
  catalogsPersistConfig,
  catalogReducer
);
const persistedReducerReviews = persistReducer(
  reviewsPersistConfig,
  reviewReducer
);

export const store = configureStore({
  reducer: {
    products: persistedReducerProducts,
    catalogs: persistedReducerCatalogs,
    reviews: persistedReducerReviews,
    auth: persistedReducerAuth,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
