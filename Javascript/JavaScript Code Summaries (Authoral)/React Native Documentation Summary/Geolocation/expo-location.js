// expo-location SUMMARY

//Location Response Object
// Object {
//   "city": "Stockholm",
//   "country": "Sweden",
//   "district": "Stockholm City",
//   "isoCountryCode": "SE",
//   "name": "Gustav Adolfs torg",
//   "postalCode": "111 52",
//   "region": "Stockholm",
//   "street": "Gustav Adolfs torg",
//   "subregion": "Stockholm",
//   "timezone": "Europe/Stockholm",
// }


// 1. Initialize app and install dependencies

    // npx expo init expo-geolocation-example

    // # navigate into that directory
    // cd expo-geolocation-example
    // yarn add @react-navigation/native @react-navigation/stack

    // # install dependencies with Expo specific package version
    // expo install expo-location react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

// 2. Importing location dependency

    import * as Location from 'expo-location';

// 2.1 Call it inside React.useEffect hook with no dependency for functional components, such that it triggers once after the first render.

    useEffect(() => {
        CheckIfLocationEnabled();
        GetCurrentLocation();
    }, []);

// 2.2 Call it inside React.useEffect hook with no dependency for functional components, such that it triggers once after the first render.

    componentDidMount() {
        this.CheckIfLocationEnabled();
        this.GetCurrentLocation();
    }

// 3. Check if device has location services enabled (replace const functions to class methods in case you need a class component)

    const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();

        if (!enabled) {
        Alert.alert(
            'Location Service not enabled',
            'Please enable your location services to continue',
            [{ text: 'OK' }],
            { cancelable: false }
        );
        } else {
        this.setState({locationServiceEnabled : enabled});
        }
    };

// 4. Check for permission, get current user position and use reverse geocoding for user coordinates

    const GetCurrentLocation = async () => {
        let { status } = await Location.requestPermissionsAsync();
      
        if (status !== 'granted') {
          Alert.alert(
            'Permission not granted',
            'Allow the app to use location service.',
            [{ text: 'OK' }],
            { cancelable: false }
          );
        }
      
        let { coords } = await Location.getCurrentPositionAsync();
      
        if (coords) {
          const { latitude, longitude } = coords;
          let response = await Location.reverseGeocodeAsync({
            latitude,
            longitude
          });
      
          for (let item of response) {
            let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
      
            this.setState({DisplayCurrentAddress: address});
          }
        }
      };