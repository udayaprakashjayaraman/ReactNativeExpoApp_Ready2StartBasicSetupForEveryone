import  React from 'react';
import {Text, View, SafeAreaView, ScrollView,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,DrawerItems } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import { constants } from '../screens/Helper/Constants';
import {DrawerContent} from '../screens/DrawerContent';
import MainTabScreen from '../screens/MainTabScreen';
import SwiperComponent from '../screens/SwiperComponent';
import LandlordLoginScreen from '../screens/Landlord/LoginScreen';
import LandlordRegisterScreen from '../screens/Landlord/RegisterScreen';
import DashboardScreen from '../screens/Landlord/Dashboard';
import TenentScreen from '../screens/Landlord/Tenent';
import PropertiesScreen from '../screens/Landlord/Properties';
import Aboutus from '../screens/Common/AboutUs';
import Settings from '../screens/Landlord/Settings';
import Support from '../screens/Common/Support';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



function LandlordHome() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent  {...props}/>} >
          <Drawer.Screen name={constants.LOGIN_DRAWER} component={MainTabScreen} />
  </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:constants.APP_COLOR,
      }, headerTintColor:"#ffff",
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}
    options={{
      headerLeft:()=>(
        <Icon.Button name='ios-menu' size={35} backgroundColor={constants.APP_COLOR} onPress={()=>{goBack()}}/>
      )
    }}>
        <Stack.Screen name={constants.LOGIN_SWIPER_COMPONENT} component={SwiperComponent} options={{headerShown:false}} />
        <Stack.Screen name={constants.LOGIN_SCREEN} component={LandlordLoginScreen} options={{headerShown:false}} />
        <Stack.Screen name={constants.REGISTER_SCREEN} component={LandlordRegisterScreen} options={{headerShown:false}} />
        <Stack.Screen name={constants.HOME_DRAWER} component={LandlordHome} options={{headerShown:false}} />
        <Stack.Screen name={constants.DASHBOARD_SCREEN} component={DashboardScreen}  />
        <Stack.Screen name={constants.TENENT_SCREEN} component={TenentScreen}  />
        <Stack.Screen name={constants.PROPERTIES_SCREEN} component={PropertiesScreen} />
        <Stack.Screen name={constants.ABOUT_US} component={Aboutus}  />
        <Stack.Screen name={constants.SETTINGS} component={Settings}  />
        <Stack.Screen name={constants.SUPPORT} component={Support}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

