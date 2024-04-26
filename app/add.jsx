import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

const Add = () => {
  return (
    <View style={styles.container}>
      <Text>Add!</Text>
      <StatusBar style="dark" />
    </View>
  )
}

export default Add

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
