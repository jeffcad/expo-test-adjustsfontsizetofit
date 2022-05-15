import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Screen1 from './Screen1'
import Screen2 from './Screen2'

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Screen1"
        component={Screen1}
      />
    </Stack.Navigator>
  )
}

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Stack" component={MyStack} />
      <Tab.Screen name="Screen2" component={Screen2} />
    </Tab.Navigator>
  )
}