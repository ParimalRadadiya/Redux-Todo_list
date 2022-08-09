import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistReducer , persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:"persist-store",
    storage
}
const persistedReducer = persistReducer(persistConfig,rootReducer)
const middleware = [];

if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
}

const store = createStore(persistedReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store)
export default store;