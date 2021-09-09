import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

export default function Head() {
  return (
    <SafeAreaView style={{ backgroundColor: '#f0f8ff'}}>
    <View style={styles.container}>

<StatusBar
        
        backgroundColor='blue'
         />

      <Text style={styles.textHeader}> HEADER </Text>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding:30,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 0,
    backgroundColor: 'blue',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    fontSize: 22,
    color: '#fff',
  },
});
