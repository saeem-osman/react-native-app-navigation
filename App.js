import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//screens
import Login from './src/routes/Login';
import Drawer from './src/routes/Drawer'

const Navigator = createSwitchNavigator({
    Login: {
        screen: Login
    },
    Drawer: {
        screen: Drawer
    }
})

export default createAppContainer(Navigator);