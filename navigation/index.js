import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/home';
import Service from '../screen/service';
import Vendor from '../screen/vendor';
import VendorDetail from '../screen/vendorDetail';
import Login from '../screen/login';
import Contact from '../screen/Contact';
import MyCart from '../screen/Mycart';
import About from '../screen/About';
const Stack = createNativeStackNavigator();
  
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}  />
      <Stack.Screen name='service' component={Service} options={{ headerShown: false }} />
      <Stack.Screen name='vendors' component={Vendor} options={{ headerShown: false }} />
      <Stack.Screen name='vendorDetail' component={VendorDetail} options={{ headerShown: false }} />
      <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Contact' component={Contact} options={{ headerShown: false }} />
      <Stack.Screen name='MyCart' component={MyCart} options={{ headerShown: false }} />
      <Stack.Screen name='About' component={About} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
export default MyStack