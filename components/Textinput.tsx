import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

interface Child {
    onChange: ()=>void
    value: any
    placeholder:string
   
  }

const Textinput : React.FC<Child> = ({onChange, value, placeholder}) => {
  return (
    <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        />
  )
}

export default Textinput

const styles = StyleSheet.create({
    input:{
        height: 40,
        
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 20,
      },
})