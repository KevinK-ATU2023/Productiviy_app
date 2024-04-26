import { Text, View, Image } from 'react-native'
import { Tabs } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';

const RootLayout = () => {
  return (
    <>
        <Tabs
          screenOptions={{
            tabBarShowLabel: true,
            tabBarInactiveTintColor: '#cdcde0',
            tabBarStyle: {
              borderTopWidth: 1,
              height: 84
            }
          }}
        >
        <Tabs.Screen 
          name="index"
          options={{
            title:"Home", 
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={24} color={color} />
            ) 
          }} 
        />
        <Tabs.Screen 
          name="add"
          options={{
            title:"Add", 
            tabBarIcon: ({ color }) => (
              <AntDesign name="plus" size={24} color={color} />
            ) 
          }} 
        />
        <Tabs.Screen 
          name="settings"
          options={{
            title:"Settings", 
            tabBarIcon: ({ color }) => (
              <AntDesign name="setting" size={24} color="black" />
            ) 
          }} 
        />
      </Tabs>
    </>
  )
}

export default RootLayout
