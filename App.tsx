import React, { useState } from 'react'
import { Text, Image } from 'react-native'
import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'

const cacheImages = (images: Array<any>): Array<Promise<any>> =>
  images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  })

export default function App() {
  const [isReady, setIsReady] = useState<boolean>(false)
  async function loadAssets() {
    const images = cacheImages([
      'https://ww.namu.la/s/c29ae1e63fd77beb9fc5a86ba6bab190a1def549276a50780042da82008ea4287244d2ae47a533509a43da846139a7f28bb656ac7c045f7373641afcdd8692c08518b61d7cae55560f663ce364315a34e8fd273a7edfa6d3ed7a7be349f8a718',
      require('./assets/splash.png'),
    ])
    console.log(images)
  }
  function onFinish() {
    setIsReady(true)
  }
  return isReady ? (
    <Text>Ready!</Text>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onError={console.error}
      onFinish={onFinish}
    />
  )
}
