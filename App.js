import { View, Text } from 'react-native'
import React from 'react'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';

import Home from './src/components/Home/Home';
import { pokemonApi } from './src/components/navigation/Api1';
import Item from './src/components/Items/Item';

 
const App = () => {
  return (
    <ApiProvider api={pokemonApi}>
        <Home/>
    
    </ApiProvider>
  )
}

export default App