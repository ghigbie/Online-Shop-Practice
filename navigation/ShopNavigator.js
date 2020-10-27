import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native';
import ProductsOverview from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverviewScreen,
  },
  {
    defaulatNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    },
  },
);

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products',
};

export default createAppContainer(ProductsNavigator);
