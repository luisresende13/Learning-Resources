/*

Stack.Navigator:
    
    <Stack.Navigator 
    initialRouteName='Home' 
    screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTitleStyle: {
          fontFamily: 'someFontFamily',
          fontWeight: 'bold',
        },
      }}
    >

Stack.Screen:

    <Stack.Screen
    name="Home"
    component={HomeScreen}
    options={{ title: 'Overview' }}
    initialParams={{query: 'someText'}}
    />
OR
    <Stack.Screen name="Home">
      {props => <HomeScreen {...props} extraData={someData} />}
    </Stack.Screen>

Uso de navigation and route:
    const ScreenComponent = ({navigation, route}) => (...);      // Navigation and route are default props of Stack.Screen and must be called to be used.
                                                                 // alternaative may be this.navigation or props.navigation

navigation.navigate('RouteName', params))  (Access/read params in route.params in the 'RouteName' screen)
navigation.push('RouteName', params)
navigation.goBack()
navigation.popToTop()

Another way of calling navigation.navigate:

    navigation.navigate({
        name: 'Home',
        params: { post: postText },
        merge: true,
    })

route.params
route.options

navigation.setParams({
  query: 'someText',
});
navigation.setOptions({
  title: 'someText',
});

Passing params to nested navigators:
    
    navigation.navigate('Account', {
    screen: 'Settings',
    params: { user: 'jane' },
    });

*/

/* Simple Example */

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation, route}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button onPress={() => (navigation.navigate('Profile', {userId: '153135'}))}>See Profile</Button>
      </View>
    );
  }
  function ProfileScreen({navigation, route}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button onPress={() => (navigation.navigate('Home', {userId: '153135'}))}>See Home</Button>
      </View>
    );
  }
  
  const Stack = createNativeStackNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={title='Home Screen'}/>
          <Stack.Screen name="Profile" component={ProfileScreen} options={title='Profile Screen'}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;