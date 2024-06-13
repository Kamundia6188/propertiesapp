





import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';

interface house {
    images : string,
  }

const Picha = ({ item }: {item:house}) => {

    const images = `https://hao.laikipian.co.ke/storage/images/${item.images}`;
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

    return (
      <Image
        style={{
          width: screenWidth * 0.8,
          height: screenHeight * 0.7,
          borderRadius: 10,
          marginLeft: 10,
          backgroundColor: '#0553',}}
        source={{uri: images}}
        />
    )
}

export default Picha