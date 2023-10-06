import React, { useEffect, useState } from 'react'
import { Button, Text } from 'react-native'
import { useLazyGetProductQuery } from '../navigation/Api1';

const Lazy = () => {
    const [value,setValue]=useState("");
    const [getProduct,results]=useLazyGetProductQuery()

    useEffect(()=>{
        if(results && results.data){
            setValue(JSON.stringify(results.data.title))
            console.log(JSON.stringify(results.data.title))
        }
        
    },[results])
  return (
    <>
        {value.length>0 && <Text>{`Lazy data ${value}`}</Text>}
        <Button onPress={()=>getProduct(""+1)} title='fetch lazy product' />
    </>
  )
}

export default Lazy