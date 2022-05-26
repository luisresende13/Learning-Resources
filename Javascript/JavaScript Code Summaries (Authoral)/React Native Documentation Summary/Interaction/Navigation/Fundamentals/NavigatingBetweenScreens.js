/*
Summary:

0. Importing:

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

1. Navigator Structure:

const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
 
2. method navigation.navigate('screenName', routeObj)     // Goes 'back' to page whitout stacking it on navigation history and dismiss history after that page

3. method navigation.push('screenName', routeObj)         // Gous to page stacking it on navigation history

4. property attribute route.params                        // Gives access to routeObj passed in navigate or push methods of the navigation prop

5. navigation.goBack()                                    // goes back in history

6. navigation.popToTop()                                  // goes back to first screen in history stack

7. navigation.setOptions({ title: 'Updated!' })}          // Updates options prop passed to Stack.Screen

8. navigation.setParams({                                 // Updates route.params attribute of current screen
  query: 'someText', 
});

*/



import * as React from 'react';
import {View, Button, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const styles = {
  screen: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'green',
    paddingVertical: '10%',
  },
  text: {
    fontSize: 28,
    // fontWeight: 'bold',
  },
  buttonView: {
    justifyContent: 'space-between',
    width:'75%',
    height: '30%',
  }
}

const App = () => {
  return (
    <MyStack />
  );
};

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Use of navigation props which are received from Stack.Screen container 
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>HOME SCREEN</Text>
      <View style={styles.buttonView}>
        <Button style={styles.button}
          title="Go forward to Profile"
          onPress={() => navigation.push('Profile')}
        />
        <Button style={styles.button}
          title="Go back to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button style={styles.button}
          title="Go back"
          onPress={() => navigation.goBack()}
        />
        <Button style={styles.button}
          title="Go back to first screen"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
  );
};

// Use of navigation and route props which are received from Stack.Screen container 
const ProfileScreen = ({ navigation, route }) => {
  return(
    <View style={styles.screen}>
      <Text style={styles.text}>PROFILE SCREEN</Text>
      <View style={styles.buttonView}>
        <Button style={styles.button}
          title="Go forward to Home"
          onPress={() => navigation.push('Home')}
        />
        <Button style={styles.button}
          title="Go back to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button style={styles.button}
          title="Go back"
          onPress={() => navigation.goBack()}
        />
        <Button style={styles.button}
          title="Go back to first screen"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
  )
};


export default App;