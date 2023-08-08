import { Tabs } from "expo-router"
import { FontAwesome } from '@expo/vector-icons'

export default function() {
  return (
    <Tabs>
      <Tabs.Screen name='home' options={{ 
        title: 'Home', 
        tabBarIcon: () => <FontAwesome name='home'
        size={25} />}}/>
      <Tabs.Screen name='products' options={{ 
        title: 'Products', 
        tabBarIcon: () => <FontAwesome name='heart'
        size={25} />}}/>
      <Tabs.Screen name='profile' options={{ 
        title: 'Profile', 
        tabBarIcon: () => <FontAwesome name='user'
        size={25} /> }}/>
    </Tabs>
  )
}