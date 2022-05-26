/*

------------------------------- Folder Project Setup ---------------------------------------

0. npm

    0.1 Updating npm:

        npm -v
        npm install npm@latest -g

    0.2 Removing package with npm:

        npm uninstall <package> --global

    obs: --global argument is optional

    0.3 Check if a module in the project is outdated:

        npm outdated
    
    0.4 Updating all modules to latest version:

        npm update

1. yarn: 

    1.0 installing or updating yarn

        yarn –version
        npm install --global yarn OR npm install -g yarn

    1.1 Installing dependency with yarn

        yarn add OR yarn global add

    1.2 Removing packages with yarn

        yarn global remove <packagename>  OR  yarn remove <packagename>

    1.3 If your package.json file already contains a list of dependencies, but the packages have not been added yet

        yarn OR yarn install

    1.4 Upgrading Packages Versions:

        yarn upgrade  # upgrade all packages
        OR
        yarn upgrade [package-name]
        OR
        yarn upgrade [package-name]@[version]
        OR
        yarn upgrade –latest [version]
        OR
        yarn upgrade-interactive   # Choose packages to upgrade onw by one.

2. react-native-cli

    3.1 Install it

        npm install -g react-native-cli

    3.2 Create new app project

        react-native init <ProjectName> [Options]
    
cd     3.3 after installation you can use the following commands to interect with app created using react-native-cli or create-react-native-app:

        yarn start
        yarn run ios
        yarn run android
        yarn test

3. create-react-native-app

    2.1 Install package:

        npm install -g create-react-native-app (Install it globally)
        OR
        npm i -g create-react-native-app

    2.2 Initialize app:

        create-react-native-app my-app
        create-react-native-app my-app --npm
        create-react-native-app my-app --yarn

        obs: Options for app template:
            -Default new app
            -Template from expo/examples: https://github.com/expo/examples:
                -blank
                -navigation
                -with-apollo
                -with-auth0
                -with-aws-storage-upload
                -with-camera
                -with-custom-font
                -with-dev-client
                -with-drawer-navigation
                -with-electron
                ...

    2.3 Run app:

        - cd my-app
        - yarn android (Only on emulators or USB connected devices. To run using the QR code to expo go app use "yarn start")
        - yarn ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
        - yarn web

    2.4 Build app:

        expo build:android
        expo build:web
        expo build:ios

4. expo-cli

    3.1 Instal expo-cli manager

        npm install --global expo-cli
        or 
        npm install -g expo-cli

    3.2 Check installation.

        expo-cli -V
        expo-cli -help

    3.3 Initialize app project and run in developer mode.

        expo init my-app
        cd my-app
        expo start

    3.4 Use expo go mobile app to scan the QR code that will appear on the command line interface.


-------------------- Dependencies Setup ------------------------------------------

1. Navigation:

    obs: all following 'yarn add' commands can be replaced with 'expo install'.

        yarn add react-native-gesture-handler @react-navigation/native
        yarn add react-native-gesture-handler @react-navigation/native-stack
        yarn add react-native-gesture-handler @react-navigation/bottom-tabs
        yarn add @react-navigation/drawer

    Usage:
        import { NavigationContainer } from '@react-navigation/native';
        import { createNativeStackNavigator } from '@react-navigation/native-stack';
        import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
        import { createDrawerNavigator } from '@react-navigation/drawer';

    If any error occur while compiling install the next following modules:

        yarn add react-native-gesture-handler@2.1.0
        yarn add react-native-reanimated
        yarn add react-native-safe-area-view
        yarn add react-native-safe-area-context

    Last resource: If navigation does not work, try yarn add OR expo install the module @react-native-community/masked-view

        yarn add @react-native-community/masked-view
        OR
        expo install @react-native-community/masked-view

2. Icons

    2.1 react-native-eva-icons   (https://akveo.github.io/eva-icons/#/?type=fill -> List of icons)

        expo install react-native-svg   (Must be with 'expo install')
        yarn add react-native-eva-icons
    
        Usage:

            import { Icon } from 'react-native-eva-icons';

            export const GithubIcon = () => (
            <Icon name='github' width={48} height={48}/>
            );

    
    2.2 @expo/vector-icons    ( no need to install it, comes with expo managed app )

        // import { Ionicons } from '@expo/vector-icons';

        const icon = <Ionicons name="md-checkmark-circle" size={32} color="green" />
        
        obs: https://icons.expo.fyi/ ( list of expo icons )


    2.3 react-native-vector-icons   (list of icons: https://oblador.github.io/react-native-vector-icons/)

        npm install --save react-native-vector-icons
        import Icon from 'react-native-vector-icons/FontAwesome';
        const myIcon = <Icon name="rocket" size={30} color="#900" />;

    2.4 weather-icons-react  (list of icons: https://najens.github.io/weather-icons-react/)

        npm install weather-icons-react --save
        import { WiDaySunny } from 'weather-icons-react';
        const icon = <WiDaySunny size={24} color='#000' />


3. Building for web or github:

    3.1 Simply add the url path to your app root folder to your package.json file in the 'homepage' field:
    
    /* ... */ /*
    "homepage": "http://exampleusername.github.io/rootfolder"
    /* ... */ /*
    
    3.2 Then on command line in the root folder:

            expo build:web

*/