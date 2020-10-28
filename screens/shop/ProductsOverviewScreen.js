import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = ({navigation}) => {
  const products = useSelector((state) => state.products.availableProducts);
  const onViewDetail = (item) => {
    console.log('View Detail ', item.id, item.title);
    navigation.navigate('ProductDetailScreen', {
      productId: item.id,
      productTitle: item.title,
    });
  };

  const onAddToCart = (item) => {
    console.log('Add to card ', item);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={(itemData) => (
          <ProductItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            price={itemData.item.price}
            onViewDetail={() => onViewDetail(itemData.item)}
            onAddToCart={() => onAddToCart(itemData.item)}
            dog={'meow'}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
  },
});

export default ProductsOverviewScreen;
