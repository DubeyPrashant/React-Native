import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

export default class ForgetPasswordScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}> 
        <Text style={styles.textStyle}>Forget Password</Text>
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