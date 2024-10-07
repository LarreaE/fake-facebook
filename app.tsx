import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, ScrollView } from 'react-native';

const App = () => {
    return (
        <>
        <StatusBar
            backgroundColor={'#FFFFFF'}
            barStyle={'dark-content'}
        />
        <ScrollView></ScrollView>
        </>
    )
}