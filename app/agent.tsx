






import { View, Text, Dimensions, FlatList } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { agents, houses } from '@/utils';
import { Image } from 'expo-image';
import Nyumba from '@/components/Nyumba';
import AgentHouse from '@/components/AgentHouse';

const agent = () => {

    const params = useLocalSearchParams();

    const getItemById = (id: string|string[]|undefined) => {
        return agents.find(item => item.id === id);
      };

    const item = getItemById(params.id)

      if (!item) {
        return (
          <View>
            <Text>Item not found!</Text>
          </View>
        );
      }
      const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
      
      const data = houses;
  return (
    <View style={{flex:1, padding: 20}}>
      <View style={{alignItems:'center', backgroundColor:'white', padding: 10, borderRadius:10}}>
      
      <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#0553',}}
          source={item.image}
          />
      
          <View style={{flexDirection:'row', gap:1}}>
          <Text style={{fontWeight:600, fontSize:16}}>{item.name}</Text>
          <Text style={{fontWeight:600, fontSize:16}}>{item.last}</Text>
          <Text style={{fontWeight:400, fontSize:16, marginLeft:2}}>Properties</Text>
          </View>
      </View>

      <FlatList
      style={{marginTop:20}}
            data={data}
            renderItem={AgentHouse}
            keyExtractor={(item) => item.id}
          />
    </View>
  )
}

export default agent