import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Moo</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
