/*

Basic navigation:
    npm install @react-navigation/native
    expo install react-native-screens react-native-safe-area-context

Tabs:
    npm install @react-navigation/bottom-tabs

Drawer:
    npm install @react-navigation/drawer
    expo install react-native-gesture-handler react-native-reanimated
    Add this to the first line of the main file (index.js or App.js): 
        import 'react-native-gesture-handler';


Importing:

    import { NavigationContainer } from '@react-navigation/native';
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    import { createDrawerNavigator } from '@react-navigation/drawer';
    import { createNativeStackNavigator } from '@react-navigation/native-stack';

babel.config.js file:

    module.exports = function(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
        [
            "module-resolver",
            {
            extensions: [".tsx", ".ts", ".js", ".json"],
            },
        ],
        "react-native-reanimated/plugin",
        ],
    };
    };



*/