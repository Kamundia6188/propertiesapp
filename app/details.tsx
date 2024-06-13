




import { View, Text, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import { houses } from '@/utils';
import { Image } from 'expo-image';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import axios from 'axios';
import Picha from '@/components/Picha';
import Carousel from 'pinar';

interface DetailsProps {
    route: { params: { itemId: number } };
  }

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


const details: React.FC<DetailsProps> = ({route}) => {

    const params = useLocalSearchParams();

    // const id = params.id;
const [hao, setHao] = useState([]);
 
const fetchData = async() => {
  const response = await axios.get('https://hao.laikipian.co.ke/api/property')
  setHao(response.data.data);
}

useEffect(()=>{
  fetchData();
},[])
    

    const getItemById = (id: string|string[]|undefined) => {
        return hao.find(item => item.id === id);
      };
     console.log(params.id)
    const item = getItemById(params.id)

      if (!item) {
        return (
          <View>
            <Text>Item not found!</Text>
          </View>
        );
      }

    const first = item.images
    console.log(first)
    const images = `https://hao.laikipian.co.ke/storage/images/${first}`;

      const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

      // const image = ({item}) => {
      //   const images = `https://hao.laikipian.co.ke/storage/images/${item.images}`;
      //   <Image
      // style={{
      //   width: screenWidth * 0.9,
      //   height: screenHeight * 0.7,
      //   borderRadius: 10,
      //   backgroundColor: '#0553',}}
      // source={{uri: images}}
      // />
      // }

     
  return (
    <View style={{margin:20}}>
      {/* <FlatList
            data={first}
            renderItem={Picha}
            keyExtractor={(item) => item.images}
            horizontal={true}
            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator= {false}
          /> */}
      <Carousel style={{width:screenWidth*0.9, height:screenHeight*0.5}}>
          {first.map(img=> 
            <Image style={{width:screenWidth*0.9, height:screenHeight*0.5, borderRadius:20}} source={img.images} key={img.images}/>
          )}
      </Carousel>
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
        <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems:'center', marginHorizontal:10, marginTop:10}}>
        <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems:'center', }}>
          <Image
          style={{ width: 50,height: 50,borderRadius: 25,backgroundColor: '#0553', marginRight:20}}
          source='https://images.pexels.com/photos/792385/pexels-photo-792385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          />
          <Text>Antony Kamundia</Text>
          </View>   
          <View style={{height: 50, width: 100, backgroundColor:'#000', alignItems:'center', justifyContent:'center', borderRadius:10}}>
            <Text style={{color: 'white'}}>Book a Visit</Text>
          </View>
        </View>
      <View style={{width:screenWidth * 0.9, marginTop:20, height: screenHeight * 0.40, borderRadius:10, backgroundColor:'red'}}>
      {/* <MapView style={{height: screenHeight * 0.40, borderRadius:10, overflow: 'hidden'}} /> */}
      </View>
    </View>
  )
}

export default details