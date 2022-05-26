/*

Full list of options attributes from documentation guide (Summary):

    <Stack.Screen
    name="Profile"
    component={ProfileScreen}
    options={({ route, navigation }) => ({
        headerShown: true,
        title: route.params.name,
        headerTintColor: '#fff', (back button and title color)
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTitleStyle: {
            fontFamily: 'someFontFamily'
            fontWeight: 'bold',
        },
        headerTitle: (props) => <CustomComponentForHeaderTitle {...props} />,      // (replace header title with custom component)
        headerRight: () => (<Button />)                                            // (replace/overrides right button)
        headerLeft: () => (<Button />)                                             // (replace/overrides back button)

        headerBackTitle: 'someText',                                               // (back button properties)
        headerBaackTitleStyle: {fontFamily: 'someFontFamily', fontWeight: 'bold'},
        headerBackImageSource: 'url' or {uri: 'url'},


    })}
    />


Using params prop of Stack.Screen in the screen title in using options:

    <Stack.Screen
    name="Profile"
    component={ProfileScreen}
    options={({ route, navigation }) => ({ title: route.params.name })}
    />

Updating options with setOptions:

    <Button
    title="Update the title"
    onPress={() => navigation.setOptions({ title: 'Updated!' })}
    />


Header styles using Stack.Screen options attribute:

    <Stack.Screen
    name="Home"
    component={HomeScreen}
    options={{
        title: 'My home',
        headerTintColor: '#fff', (back button and title color)
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTitleStyle: {
            fontFamily: 'someFontFamily'
            fontWeight: 'bold',
        },
    }}
    />

Sharing common options across screens:

    <Stack.Navigator
      screenOptions={{
        presentation: 'modal'
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >

Replacing the title with a custom component​:

    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: (props) => <CustomComponentForHeaderTitle {...props} /> }}
      />
    </Stack.Navigator>


Adding a button to the right and left of the header and replacing the title with a custom component: 

<Stack.Screen
name="Home"
component={HomeScreen}
options={{
    headerTitle: props => <LogoTitle {...props} />,
    headerRight: () => (<Button />)
    headerLeft: () => (<Button />)
}}
/>

headerRight can also be set from inside the screen using:

function HomeScreen() {
    React.useLayoutEffect(() => { naviation.setOptions({ headerRight: () => (<Button />) }) })
    return <Text>Component content...</Text>
}

Customizing back button:

<Stack.Screen
name="Home"
component={HomeScreen}
options={{
    headerBackTitle: 'someText',
    headerBaackTitleStyle: {fontFamily: 'someFontFamily', fontWeight: 'bold'},
    headerBackImageSource: 'url' or {uri: 'url'},
}}
/>

*/