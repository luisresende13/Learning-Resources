
import React, { useState, Component } from 'react';
import { View, Text, Button } from 'react-native';

const styles = {
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'grey',
  }
};

// FUNCTION COMPONENT WITH props AND state
const FunctionComponentWithPropsAndState = (props) => {
  // Setting function state
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Not disabled');

  // Setting function methods
  const onButtonPress = () => {
    setIsDisabled(!isDisabled);
    setButtonText('Disabled');
  }

  // function component return
  return(
    <View style={styles.view}>
      <Text>{props.initialText}</Text>
      <Button disabled={isDisabled} title={buttonText} onPress={onButtonPress} ></Button>
    </View>
    //NOTE: Button will not reset on pressing after being disabled, because the onPress event can not be fired again once the button is disabled.
  )

}

// CLASS COMPONENT
class ClassComponent extends Component {
  
  // Setting component state 
  state = {
    isDisabled: false,
    buttonText: 'Not Disabled'
  }

  // Setting component methods
  onButtonPress = () => {
    this.setState({
      isDisabled: true,
      buttonText: 'Disabled'
    });
  }

  // Setting rendering function
  render() {
    return(
      <View style={styles.view}>
        <Text>{this.props.initialText}</Text>
        <Button disabled={this.state.isDisabled} title={this.state.buttonText} onPress={this.onButtonPress} ></Button>
      </View>  
    )
  }

};

// Setting App Exportation
const App = () => {
  return (
    <View style={{flex: 1}}>
      <FunctionComponentWithPropsAndState initialText='Componente Funcional' />
      <ClassComponent initialText='Componente de Classe' />
    </View>
  );
}

export default App;