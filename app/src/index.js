import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogicMiddleware } from 'redux-logic';
import rootReducer from './reducers'
import './index.css'
import arrLogic from './logic'
import App from './containers/main/App'
import registerServiceWorker from './registerServiceWorker'

const logicMiddleware = createLogicMiddleware(arrLogic);
const store = createStore(
  rootReducer,
  {},
  applyMiddleware(logicMiddleware)
)

render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById('root')
)

//registerServiceWorker()
