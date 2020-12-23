import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';


const initialState = {
  user: null, token: null
}

const store = createStore(
  reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store} >
      {children}
    </Provider>
  )
}