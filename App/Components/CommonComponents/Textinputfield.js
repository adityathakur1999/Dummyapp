import { StyleSheet, Text,  View , TextInput} from 'react-native'
import React from 'react'

const Textinputfield = ({label,placeholderValue, onChangeText}) => {

  return (
    <View style={styles.container}> 
      <Text>{label}</Text>
      <TextInput placeholder={placeholderValue} placeholderTextColor="gray" onChangeText={(text)=>onChangeText(label, text)}/>
      <View style={styles.linetext}/>
     </View>
  )
}

export default Textinputfield

const styles = StyleSheet.create({
    container:{
      padding:5,
      margin:7
      
      
  

    },
    linetext:{
      backgroundColor:'black', height:1

    }
  


})