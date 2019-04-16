import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, secureTextEntry, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Login extends Component {

    state = {
        name: '',
        pass: ''
    }
    login = () =>{
      this.props.navigation.navigate('Drawer');
    }
  render() {
    return (
      <View style={styles.container}>
        <Icon name='home' size={56} color='#6b4367' />
        <Text style={styles.text}> Your Galaxy </Text>
        <TextInput style={styles.input} placeholder= 'User Name'
            onChangeText = {(name)=>this.setState({name})} />
        <TextInput style={styles.input} secureTextEntry={true}
            placeholder='Password' onChangeText={(pass)=>this.setState({pass})} />
        <TouchableHighlight underlayColor="#CCC" style={styles.btn} onPress={this.login}>
        <Text style={styles.btnText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="transparent" style={styles.regCard}>
        <Text style={styles.regText}>Don't have account? Click Here</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        color: '#a0659a'
    },
    input: {
        width: 220,
        height: 40,
        borderColor: '#4247a3',
        borderRadius: 5,
        borderTopWidth: 1,
        fontSize: 16,
        backgroundColor: '#bec0e2',
        marginTop: 10,
        padding: 5
    },
    btn:{
      marginTop: 10,
      backgroundColor: '#7d63e2',
      borderRadius: 5,
      width: 220,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnText: {
      fontSize: 16,
      color: '#0e0435'
    },
    regCard: {
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1,
    },
    regText:{
      fontSize: 12
    }
})