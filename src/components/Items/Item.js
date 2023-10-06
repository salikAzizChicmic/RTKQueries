import React from 'react'
import { ScrollView, Text, View } from 'react-native'

const Item = ({title,cat,description}) => {
  return (
    
    <View style={{flex:1,width:'100%',height:400,marginVertical:10,justifyContent:'center',alignItems:'center',borderWidth:1}}>
        <Text>{title}</Text>
        <Text>{cat}</Text>
        <Text>{description}</Text>
    </View>
   
  )
}
export default Item