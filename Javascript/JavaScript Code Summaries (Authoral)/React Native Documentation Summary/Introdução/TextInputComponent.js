import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const styles = {
  main_view: {
    flex: 1,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'grey',
  }
};

const PizzaTranslator = () => {
  
    const [text, setText] = useState('');

  return (
    <View style={styles.view}>
      <TextInput
        style={{height: 40, backgroundColor:'black'}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {'Texto escrito: ' + text}
      </Text>
    </View>
  );
}

export default PizzaTranslator;