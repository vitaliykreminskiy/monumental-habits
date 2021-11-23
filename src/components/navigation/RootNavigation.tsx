import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { SCREENS } from '../../constants/screens'

const {
  FORGOT_PASSWORD,
  ONBOARDING,
  SIGN_UP,
  LOG_IN
} = SCREENS.LAUNCH

const Stack = createStackNavigator()

const stackScreens = [
  {
    name: ONBOARDING,
    component: null
  }
]

export const RootNavigation = () => {

}