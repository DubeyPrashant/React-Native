import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    AsyncStorage,
    TouchableOpacity
    } from 'react-native'

    export default class SignInScreen extends React.Component {
      signIn = async () => {
        await AsyncStorage.setItem('userToken2', '123456789')
          this.props.navigation.navigate('Authloading')
      }
      render() {
        return (
          <View style={styles.container}>
            <TouchableOpacity
              onPress={this.signIn}
              style={styles.buttonStyle}>
              <Text style={styles.textStyle}>Complete sign in</Text>
            </TouchableOpacity>
          </View>
        )
      }
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5059ae',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    color: '#fff'
  }
})