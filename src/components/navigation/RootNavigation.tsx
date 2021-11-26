import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { SCREENS } from '../../constants/screens'
import {
  StackScreen,
  StackScreenNavigation
} from '../../types/navigation'
import { OnboardingScreen } from '../../screens/Launch/Onboarding'

const {
  FORGOT_PASSWORD,
  ONBOARDING,
  SIGN_UP,
  LOG_IN
} = SCREENS.LAUNCH

const Stack = createStackNavigator()

const stackScreens: StackScreenNavigation = [
  {
    name: ONBOARDING,
    component: OnboardingScreen
  },
]

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {stackScreens.map((screen: StackScreen, index: number) => (
          <Stack.Screen
            key={index}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}