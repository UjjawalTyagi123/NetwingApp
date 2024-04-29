import React from 'react'
import { View ,Text} from 'react-native'
import Navbar from './Navbar'

export default function Contact() {
  return (
    <View>
      <Navbar/>
      <Text style={{marginTop:100,fontSize:30,marginLeft:50}}>contact Us</Text>
    </View>
  )
}
