import React from 'react'
import {
  VStack,
  Image,
  Text
} from 'native-base'

export const OnboardingScreen = () => {

  return (
    <VStack
      bgColor='white'
      height={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
      paddingX={5}
    >
      <Text
        fontFamily='heading'
        fontSize={32}
        fontWeight={600}
        lineHeight={32}
        textAlign='center'
        color='palette.eclipse'
      >
        Welcome to monumental habits
      </Text>
      <Image
        source={require('../../assets/traveler.png')}
        alt='Traveler'
      />
      <Text
        fontFamily='heading'
        fontWeight={600}
        textAlign='center'
        fontSize={17}
        lineHeight={24}
        color='palette.eclipse'
      >
        We can <Text color='palette.orange'>help you</Text>
        {' '}to be the better version of
        {' '}<Text color='palette.orange'>yourself</Text>
      </Text>
    </VStack>
  )
}