import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createDrawerNavigator } from 'react-navigation'

import AppComponent from './AppComponent'

const Drawer = createDrawerNavigator({
    AppComponent:{
        screen: AppComponent
    }
})

export default Drawer