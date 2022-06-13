import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import MegaSena from './components/mega.js'
import Estilo from './estilos.js'



export default () => (
  
  <SafeAreaView style={style.App}>
    
    <MegaSena></MegaSena>
        
  </SafeAreaView>
  
  )

const style = StyleSheet.create({
  App:{
    backgroundColor: 'white',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40

  }
})


