import React, {useLayoutEffect} from 'react';
import {View, Text, Image, StyleSheet, Button, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';

const ProductDetailScreen = ({navigation}) => {
  const productId = navigation.getParam('productId');
  const {title} = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId),
  );

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

ProductDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam('productTitle'),
  };
};

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

export default ProductDetailScreen;
