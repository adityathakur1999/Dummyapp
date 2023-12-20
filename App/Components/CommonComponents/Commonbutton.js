import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Commonbutton = ({title, onPress}) => {

  return (

      <TouchableOpacity style={styles.container} onPress = {onPress}>
    <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
    

  )
}

export default Commonbutton

const styles = StyleSheet.create({ container:{
  height:40,
  backgroundColor:"#9775FA"
  ,
  justifyContent:"center",
  alignItems:"center",
  
},
button:{
  fontSize:20,
  fontWeight:"600",
  color:"white"
}

})