import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const styles = {
  mainView: {
    flex: 1,
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'grey',
  }
};

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

const App = () => {
  
  var textList = [];
  for (var i=0; i<100; i++) {
    textList[i] = i
  }

  textList = textList.map((item, index) => { return(<Text>{index + '. Elemento de Texto'}</Text>) })

  return (
    // ZoomScale attributes work only for iOS devices.

    <View style={styles.mainView}>
      <View style={styles.view}>
        <Text style={{ fontSize: 45 }}>Tela Rolável</Text>
        <Image source={logo} />
      </View>
      <ScrollView maximumZoomScale={5} minimumZoomScale={.5}> 
          { textList }
      </ScrollView>
    </View>
  )

}

export default App;