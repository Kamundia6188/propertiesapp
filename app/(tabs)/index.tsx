import { StyleSheet, Platform, View, Text, ImageBackground, TextInput, FlatList, ImageSourcePropType, ScrollView, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import MapView from 'react-native-maps';
import { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { FlatList } from 'react-native-gesture-handler';
import {  agents, houses, housetype } from '@/utils';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import renderHouse from '@/components/renderHouse';
import Nyumba from '@/components/Nyumba';
import Mainhao from '@/components/Mainhao';
import axios from 'axios';


interface Icon {
  icon: string;
  type: string;
  // Optional property
}



interface Agent {
  id : string,
  name: string,
  image? : string,
  last : string,
}

export default function HomeScreen() {

const [hao, setHao] = useState([]);
 
const fetchData = async() => {
  const response = await axios.get('https://hao.laikipian.co.ke/api/property')
  setHao(response.data.data);
}

useEffect(()=>{
  fetchData();
},[])

console.log(hao);
 
  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  // const [text, setText] = useState('');
  const data = housetype;
  const house = houses;
  const agent = agents;
  const [text, setText] = useState('');

  const onChangeText = () => {

  }

  const twende = () => {

  }

  const renderAgent = ({item}:{item:Agent}) =>(
    <View style={{marginRight:20, flexDirection: 'column', alignItems:'center'}}>
      <Link href={{ pathname: 'agent', params: { id: item.id } }}>
          <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#0553',}}
          source={item.image}
          />
      </Link>
          <Text style={{}}>{item.name}</Text>
          
    </View>
  )

  const renderItem = ({ item }: {item:Icon}) => (
    <View style={{ padding: 10, margin: 5, borderRadius: 15, flexDirection: 'row', gap: 10, borderWidth: 2, borderColor: 'gray'}}>
      <MaterialCommunityIcons name={item.icon} size={20} color="black" />
      <Text>{item.type}</Text>
    </View>
  );

 


  return (
   
    
      <View style={styles.container}>
        {/* info */}
       <View style={styles.info}>
        <View>
          <Text>Hello !</Text>
          <Text style={styles.name}>Antony Kamundia</Text>
        </View>
        <View>
          <Image
          style={styles.image}
          source='https://images.pexels.com/photos/792385/pexels-photo-792385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          />
        </View>
       </View>

       {/* input */}
       <View style={styles.search}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Type something..."
          />
          <View style={styles.searchbtn}>
            <MaterialCommunityIcons name="home-search-outline" size={24} color="black" />
          </View>
        </View>

        {/* Horizontal Flatlist */}
        <View style={styles.horizontalflatlist}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator= {false}
          />
        </View>
        <ScrollView>
        {/* featured */}
        <View style={{marginLeft:20, marginTop: 20 }}>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
            <Text style={{fontWeight:600, fontSize:16}}>Feature Properties</Text>
            <Text>View All</Text>
          </View>
          <View style={{marginTop: 20}}>
            <FlatList
              data={house}
              renderItem={Nyumba}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator= {false}
            />
          </View>
        </View>
        {/* Agents */}
        <View style={{marginLeft:20, marginTop: 0 }}>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
            <Text style={{fontWeight:600, fontSize:16}}>Top Agents</Text>
            <Text>View All</Text>
          </View>
          <View style={{marginTop: 20}}>
            <FlatList
              data={agent}
              renderItem={renderAgent}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator= {false}
            />
          </View>
        </View>
        
         {/* House List */}
        <View style={{marginTop: 20, marginHorizontal:20}}>
            <FlatList
              data={hao}
              renderItem={Mainhao}
              keyExtractor={(item) => item.id}
            />
          </View>
          </ScrollView>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  info: {
    margin: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 20,
    fontWeight: '800',

  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0553',
  },
  search:{
    marginTop: 10,
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input:{
    height: 40,
    width: '83%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  searchbtn:{
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    padding: 6,
    borderRadius: 25,
    borderWidth: 2, // Border width
    borderColor: 'gray', // Border color
  },
  // horizontalflatlist
  horizontalflatlist:{
   marginLeft: 20,
   marginTop: 30,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
