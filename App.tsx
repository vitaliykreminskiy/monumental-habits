import React from 'react'
import { RootNavigation } from './src/components/navigation/RootNavigation'
import {
  NativeBaseProvider,
  extendTheme
} from 'native-base'

import { theme } from './src/config/theme'

const nativeBaseTheme = extendTheme(theme)

export const App = () => (
  <NativeBaseProvider theme={nativeBaseTheme}>
    <RootNavigation />
  </NativeBaseProvider>
)