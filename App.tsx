import React, { useState } from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import Stack from './navigation/Stack'

const cacheImages = (images: any[]) =>
  images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  })

const cacheFonts = (fonts: any[]) => fonts.map(font => Font.loadAsync(font))

export default function App() {
  const [isReady, setIsReady] = useState<boolean>(false)

  function loadAssets(): Promise<any> {
    const images = cacheImages([
      'https://ww.namu.la/s/c29ae1e63fd77beb9fc5a86ba6bab190a1def549276a50780042da82008ea4287244d2ae47a533509a43da846139a7f28bb656ac7c045f7373641afcdd8692c08518b61d7cae55560f663ce364315a34e8fd273a7edfa6d3ed7a7be349f8a718',
      require('./assets/splash.png'),
    ])
    const fonts = cacheFonts([Ionicons.font])

    return Promise.all([...images, ...fonts])
  }

  function onFinish() {
    setIsReady(true)
  }

  return isReady ? (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  )
}
