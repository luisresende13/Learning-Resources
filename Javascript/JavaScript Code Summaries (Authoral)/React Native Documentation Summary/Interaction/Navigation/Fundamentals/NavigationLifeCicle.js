/*

React navigation emits events to screen components that subscribe to them.
We can listen to focus and blur events to know when a screen comes into 
focus or goes out of focus respectively.

    function Profile({ navigation }) {
        React.useEffect(() => {
            const unsubscribe = navigation.addListener('focus', () => {
                // Screen was focused
                // Do something
            });

            return unsubscribe;
        }, [navigation]);

        return <ProfileContent />;
    }



Use the useFocusEffect hook to perform side effects.

    import { useFocusEffect, useIsFocused } from '@react-navigation/native';

    function Profile() {
    useFocusEffect(
        React.useCallback(() => {
        // Do something when the screen is focused

        return () => {
            // Do something when the screen is unfocused
            // Useful for cleanup functions
        };
        }, [])
    );

    return <ProfileContent />;
    }


*/