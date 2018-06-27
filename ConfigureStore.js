import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Reducers from './src/reducers';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, Reducers);
const store = createStore(persistedReducer, {}, applyMiddleware(reduxThunk));
const persistor = persistStore(store);
export { store, persistor };
