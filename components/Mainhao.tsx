




import { View, Text, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'

interface house {
    id : string,
    attributes : {
        address? : string,
        listing_type? : string,
        city? : string,
        description? : string,
        build_year? : string,
    },
    characteristics : [{
        price? : number,
        bedrooms? : number,
        bathrooms? : number,
        sqft? : number,
        price_sqft? : number,
        status? : string,
    }],
    images : [
        {
            images? : string,
        }
    ],
    broker : {
        name? : string,
        address? : string,
        phone_number? : null
    }
  }

  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Mainhao = ({ item }: {item:house}) => {
    
    const first = item.images[0].images
    console.log(first)
    const images = `https://hao.laikipian.co.ke/storage/images/${first}`;
  return (
    <View style={{marginTop:20}}>
          
          <View style={{width:screenWidth*0.9, height: 300,  borderRadius: 20, marginRight: 10}}>
          <Link href={{ pathname: 'details', params: { id: item.id } }}>
            <ImageBackground
              source={{uri: images}} 
              resizeMode='cover'
              style={{ flexDirection:'column', justifyContent:'space-between', padding:10, width:screenWidth*0.9, height: screenHeight*0.3, borderRadius: 20, overflow: 'hidden',}}
            >
              <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <View style={{backgroundColor: '#000', paddingHorizontal: 8, paddingBottom: 4, paddingTop:1, borderRadius: 15}}>
                  <Text style={{color:'#fff'}}>{item.attributes.listing_type}</Text>
                </View>
                <Ionicons name="heart-outline" size={24} color="white" />
              </View>
              
            </ImageBackground>
            </Link>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:10, marginTop:10}}>
                  <Text style={{ fontSize:16}}>{item.attributes.description}</Text>
                  <Text style={{fontWeight:300,}}>Kshs {item.characteristics[0].price}</Text> 
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:10, marginTop:10}}>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <MaterialCommunityIcons name="map-marker" size={16} color="gray" />
                <Text style={{fontWeight:300,}}>{item.attributes.city}</Text>
              </View>
                  
            </View>
          </View>
          
        </View>
  )
}

export default Mainhao