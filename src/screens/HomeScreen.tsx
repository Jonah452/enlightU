import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingScreen from './subscreens/LandingScreen';
import NotificationsScreen from './subscreens/NotificationsScreen';
type AppStackParamList = {
  Landing: undefined,
  Notifications: undefined
};
const Bottom = createBottomTabNavigator<AppStackParamList>();

export default function HomeScreen() {
  return (
      <Bottom.Navigator initialRouteName="Landing">
        <Bottom.Screen name="Landing" component={LandingScreen} />
        <Bottom.Screen name="Notifications" component={NotificationsScreen} />
      </Bottom.Navigator>
  );
}