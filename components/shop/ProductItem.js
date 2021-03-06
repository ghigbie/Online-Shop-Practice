import React from 'react';
import {View, Text, Image, StyleSheet, Button, Dimensions} from 'react-native';
import Colors from '../../constants/Colors';

const ProductItem = ({title, price, image, onViewDetail, onAddToCart}) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{uri: image}} />
    <View style={styles.details}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
    </View>
    <View style={styles.buttonRow}>
      <Button
        color={Colors.primary}
        title="View Details"
        onPress={onViewDetail}
      />
      <Button
        color={Colors.primary}
        title="Add to Cart"
        onPress={onAddToCart}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOpacity: 0.46,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 12,
    elevation: 8,
    borderRadius: 12,
    backgroundColor: '#fff',
    height: Dimensions.get('window').height * 0.36,
    margin: 20,
    padding: 6,
  },
  image: {
    height: '70%',
    width: '100%',
    borderRadius: 12,
  },
  details: {
    alignItems: 'center',
    height: '16%',
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '16%',
  },
});

export default ProductItem;
