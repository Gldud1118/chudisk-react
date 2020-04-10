import { createStore, applyMiddleware } from 'redux';
import history from '../history';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware({
  context: {
    history,
  },
});

const middleWares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleWares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(rootSaga);
