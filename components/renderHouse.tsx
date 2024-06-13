




import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

interface house {
    id : string,
    name : string,
    image? : string,
    type : string,
    for : string,
    amount : string,
    Location : string
  }

const renderHouse = ({ item }: {item:house}) => {
    
        const images = {uri: item.image};
        const image = { uri: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" };
        console.log(image)
       return(
        <View>
          
          <View style={{width:300, height: 300,  borderRadius: 20, marginRight: 10}}>
          <Link href={{ pathname: 'details', params: { id: item.id } }}>
            <ImageBackground
              source={images} 
              resizeMode='cover'
              style={{ flexDirection:'column', justifyContent:'space-between', padding:10, width:300, height: 200, borderRadius: 20, overflow: 'hidden',}}
            >
              <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <View style={{backgroundColor: '#000', paddingHorizontal: 8, paddingBottom: 4, paddingTop:1, borderRadius: 15}}>
                  <Text style={{color:'#fff'}}>{item.type}</Text>
                </View>
                <Ionicons name="heart-outline" size={24} color="white" />
              </View>
              
            </ImageBackground>
            </Link>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:10, marginTop:10}}>
                  <Text style={{ fontSize:16}}>{item.name}</Text>
                  <Text style={{fontWeight:300,}}>Kshs {item.amount}</Text> 
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:10, marginTop:10}}>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <MaterialCommunityIcons name="map-marker" size={16} color="gray" />
                <Text style={{fontWeight:300,}}>{item.Location}</Text>
              </View>
                  
            </View>
          </View>
          
        </View>)
      };


export default renderHouse