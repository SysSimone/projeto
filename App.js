import React from 'react';
import {View, StyleSheet} from 'react-native';

import Head from './src/component/Head';
import SubHeader from './src/component/SubHeader';
import Tabe from './src/component/Tabe';



export default function App() {
  return(
    <View style={{flex: 1}}>
    <Head/>
    <SubHeader/>
    <Tabe/>
    
    </View>
  )
};
