import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import Products from './screens/shop/ProductsOverviewScreen';

import productsReducer from './store/reducers/products';

const rootReducer = combineReducers({
  products: productsReducer,
});
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Text>Moo</Text>
        <Products />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
