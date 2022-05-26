/*
Resume:

1. Platform.OS 
Returns string either ios or android.

2. Platform.Version
Returns device os version.
Note: if running on android returns integer, if iOS returns string.

2. Platform.select({ios: '', android: '', default: ''})
Returns conditionally based on device os.
To return components add closed parentheses '()' after the expression above.

3. Component.ios.js or Component.android.js or Component.native.js (for both ios and android)
Imports component selectively based on os extension.
Example: 
  import exampleComponent from 'exampleComponent'  // (detects extension automatically and imports based on device os)
*/

import { Platform, StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // Platform.OS returns either 'ios' or 'android'
    height: Platform.OS === 'ios' ? 200 : 10,

    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'green'
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue'
      }
    })
  }
});

const androidComponent = () => {
  return(
    <View style={styles.container}>
      <Text>{'Running on Android ' + Platform.Version + '.0'}</Text>
    </View>
  )
}

const iosComponent = () => {
  return(
    <View style={styles.container}>
      <Text>{'Running on iOS ' + Platform.Version + '.0'}</Text>
    </View>
  )
}

// Conditional returning of component based on devise os.
const Component = Platform.select({
  ios: () => iosComponent,
  android: () => androidComponent,
})() //Note the empty parentheses at the end of the component definition.
// ADDITIONAL OPTIONS
//  native: require('NativeComponent'),
//  default: () => require('WebComponent')

const App = () => {
  return(
    <Component />
  )
}

export default App;