import React, { Component } from 'react'
import { Text, View, StyleSheet,Button } from 'react-native'

export default class AppComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> I am from drawer </Text>
        <Button
        title="Go Back"
        style={styles.btn}
        onPress={()=>this.props.navigation.navigate('Login')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#092872',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        color: '#d1ffe6'
    },
    btn:{
        width: 250,
        height: 40,
        fontSize: 20,
        backgroundColor: '#9ee273',
        borderRadius: 5,
    }
})
