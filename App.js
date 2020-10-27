import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text} from 'react-native';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import ShopNavigator from './navigation/ShopNavigator';

import productsReducer from './store/reducers/products';

const rootReducer = combineReducers({
  products: productsReducer,
});
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
};

export default App;
