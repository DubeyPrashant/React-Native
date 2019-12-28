import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  TouchableOpacity
} from 'react-native'

export default class SettingsScreen extends React.Component {
    
    signOut = async () => {
        await AsyncStorage.clear()
        this.props.navigation.navigate('Authloading')
      }
    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => this.singOut}
            style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Sign out</Text>
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