/*

Dispatch actions to the nested child navigators from a parent:

    navigation.dispatch(DrawerActions.toggleDrawer());   // (could be openDrawer, closeDrawer or toggleDrawer)

To receive events from parent navigator, you can explicitly listen to parent's events with navigation.getParent():

    const unsubscribe = navigation.getParent().addListener('tabPress', (e) => {
    // Do something
    });

Passing params to a screen in a nested navigator

    navigation.navigate('Root', {
    screen: 'Settings',
    params: {
        screen: 'Sound',
        params: {
        screen: 'Media',
        },
    },
    });

Set initial navigation screen using params:

navigation.navigate('Root', {
  screen: 'Settings',
  initial: false,
});

*/