





import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';

interface house {
    images : string,
  }

const Image = ({ item }: {item:house}) => {
    const images = `https://hao.laikipian.co.ke/storage/images/${item.images}`;
  return (
    <Image
      style={{
        width: screenWidth * 0.9,
        height: screenHeight * 0.7,
        borderRadius: 10,
        backgroundColor: '#0553',}}
      source={{uri: images}}
      />
  )
}

export default Image