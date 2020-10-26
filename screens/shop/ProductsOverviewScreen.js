import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import PRODUCTS from '../../data/dummy-data';

const styles = StyleSheet.create({
  container: {},
});

const ProductsOverviewScreen = (props) => {
  //const products = useSelector((state) => state.products.availableProducts);

  return (
    <View style={styles.container}>
      <Text>ProductsOverviewScreen Booya!</Text>
      <FlatList
        data={PRODUCTS}
        renderItem={(itemData) => <Text>itemData.item.title</Text>}
      />
    </View>
  );
};

export default ProductsOverviewScreen;
