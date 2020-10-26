import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
//import {createStore, combineReducers} from 'redux';
//import {Provider} from 'react-redux';

//import productsReducer from './store/reducers/products';

// const rootReducer = combineReducers({
//   products: productsReducer,
// });
//const store = createStore(rootReducer);

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Text>Moo</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
