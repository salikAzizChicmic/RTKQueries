import { View, Text,Alert, TextInput, Button, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useCreateUserMutation, useGetPokemonByNameQuery } from '../navigation/Api1'
import Item from '../Items/Item'
import Lazy from '../LazyQuery/Lazy'

const Home = () => {
    const { data, isLoading} = useGetPokemonByNameQuery(1,{skip:false})
    console.log(data)

 const [createUser]=useCreateUserMutation()
//  console.log(Object.values(p.alldata.queries)[0].data[0])

const handleSubmit = () => {
    const data1={
            title: 'test product1',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }

    createUser(data1)
      .then((res) => {
        Alert.alert("User created",JSON.stringify(res));
        
      })
      .catch(() =>
        Alert.alert("there was an error"),
      );
    
  };
 
  return (
    <View>
      <Text>Home</Text>
      <Button title='Post User' onPress={handleSubmit} />
      <Lazy/>
      <ScrollView>
      {!isLoading && data && data.map((ele,ind)=>{
        return  <Item key={ele.id} cat={ele.category} title={ele.title} description={ele.description}  />
      })}
      </ScrollView>
    </View>
  )
}

export default Home