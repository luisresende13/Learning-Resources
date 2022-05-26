import React from 'react';
import {View, ScrollView, Text} from 'react-native';

const styles = {
  screen: {
    flex: 1,
    backgroundColor: 'lightpink',
    paddingTop: '8%'
  },
  header: {
    flex: .06,
    justifyContent: 'center',
    // backgroundColor:'powderblue',    
  },
  body: {
    flex: .87,
    // backgroundColor: 'skyblue',
  },
  bodyHeader: {
    height: 50,
    justifyContent: 'center',
    // backgroundColor: 'darkblue',
  },
  bodyRow: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 60,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(120, 120, 120, .2)',
  },
  rowHeader: {
    height: 45,
  },
  rowCard: {
    height: 200,
    borderRadius: 20,
    // borderWidth: 2,
    padding: 10,
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, .2)'
  },
  footer: {
    flex: .07,
    // backgroundColor:  'powderblue',
  },
  menuItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(100, 100, 100, 1)',
    // borderWidth: 1
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  border: {
    marginBottom: '3%',
    borderRadius: 40
  },
  
}

const menuItems = ['Home', 'Entradas', 'Calendário', 'Análises', 'Desafios']
const menu = menuItems.map((item, index) => {
  return(
    <View key={index} style={[styles.menuItem, index==0 ? {borderWidth: 2, borderRadius: 6, borderColor: 'rgba(155, 155, 155, .5)'} : {}]}>
      <Text style={{fontWeight: index==0 ? 'bold':  null}}>{item}</Text>
    </View>
  )
})

const rows = [0,1,2,3,4]
const bodyRows = rows.map((item, index) => {
  return (
    <View key={index} style={styles.bodyRow}>
      <View style={styles.rowHeader}>
        <Text style={{fontSize: 18}}>{'Section title '}</Text>
      </View>
      <View style={[styles.rowCard, {height: styles.rowCard.height * Math.random(1) + 50}]}>
        <Text>Section text...</Text>
      </View>
    </View>
  )
})

const App = () => {

  return(
    <View style={[styles.screen]}>
      
      <View style={[styles.header]}>
        <Text>Header</Text>
      </View>
      
      <ScrollView style={[styles.body]}>
        
        <View style={[styles.bodyHeader]}>
          <Text>Body Header</Text>
        </View>
        
        {bodyRows}

      </ScrollView>
      
      <View style={[styles.footer]} flexDirection='row'>
        {menu}
      </View>
    </View>
  )
}

export default App;