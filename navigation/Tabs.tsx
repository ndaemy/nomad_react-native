import React, { useLayoutEffect } from 'react'
import { Platform } from 'react-native'
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
import { RouteProp } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import Movies from '../screens/Movies'
import TV from '../screens/TV'
import Search from '../screens/Search'
import Favs from '../screens/Favs'

type TabParamList = {
  Movies: undefined
  TV: undefined
  Search: undefined
  Favorites: undefined
}

type Props = {
  navigation: BottomTabNavigationProp<TabParamList, 'Movies'>
  route: RouteProp<TabParamList, 'Movies'>
}

const Tabs = createBottomTabNavigator<TabParamList>()

const getHeaderName = (route: RouteProp<TabParamList, 'Movies'>) =>
  route?.state?.routeNames[route.state.index] || 'Movies'

export default function MyTabs({ navigation, route }: Props) {
  useLayoutEffect(() => {
    const name = getHeaderName(route)
    navigation.setOptions({
      title: getHeaderName(route),
    })
  }, [route])
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-'
          if (route.name === 'Movies') iconName += 'film'
          else if (route.name === 'TV') iconName += 'tv'
          else if (route.name === 'Search') iconName += 'search'
          else if (route.name === 'Favorites') iconName += 'heart'
          return (
            <Ionicons
              name={iconName}
              color={focused ? 'white' : 'grey'}
              size={26}
            />
          )
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'black',
          borderTopColor: 'black',
        },
      }}
    >
      <Tabs.Screen name='Movies' component={Movies} />
      <Tabs.Screen name='TV' component={TV} />
      <Tabs.Screen name='Search' component={Search} />
      <Tabs.Screen name='Favorites' component={Favs} />
    </Tabs.Navigator>
  )
}
