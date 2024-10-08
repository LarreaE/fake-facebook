import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, ScrollView } from 'react-native';
import Header from './components/Header';
import Home from './screens/Home';
import Groups from './screens/Home';
import Friends from './screens/Home';
import Profile from './screens/Home';
import Notifications from './screens/Home';
import Menu from './screens/Menu';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

const App = () => {
    return (
        <>
            <StatusBar
                backgroundColor={'#FFFFFF'}
                barStyle={'dark-content'}
            />
            <ScrollView>
                <Header />
            </ScrollView>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarShowIcon: true,
                        tabBarShowLabel: false,
                        tabBarActiveTintColor: '#3a86e9',
                        tabBarInactiveTintColor: '#9F9F9F',
                    })}
                >
                    <Tab.Screen name="Home" component={Home} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}

export default App;
