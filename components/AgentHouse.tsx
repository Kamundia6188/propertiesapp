




import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

interface House {
    id : string,
    name : string,
    image? : string,
    type : string,
    for : string,
    amount : string,
    Location : string
  }

  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const AgentHouse= ({ item }: {item:House}) => {
  return (
    
    <View>
    <View style={{backgroundColor:'white', padding:10, flexDirection:'row', marginTop:10, borderRadius:10}}>
    <Link href={{ pathname: 'details', params: { id: item.id } }} style={{marginRight:10}}>
      <Image
        source={item.image}
        style={{width:screenWidth*0.3,height:screenHeight*0.1, borderRadius:10, }}
      />
     </Link>
      <View style={{flexDirection:'row', justifyContent:'space-between', flex:1}}>
        <View style={{}}>
            <Text style={{fontSize:16, fontWeight:600}}>{item.name}</Text>
            <Text style={{fontSize: 14, fontWeight:500}}>{item.type}</Text>
            <View style={{flexDirection:'row', alignItems:'center', marginBottom:10}}>
              <MaterialCommunityIcons name="map-marker" size={14} color="gray" />
              <Text>{item.Location}</Text>
            </View>
            
            <Text>{item.for}</Text>
        </View>
        <View style={{ justifyContent:'flex-end'}}>
            <View style={{backgroundColor:'black', paddingHorizontal:8, paddingVertical:4, borderRadius:20}}>
                <Text style={{color:'white'}}>{item.amount}</Text>
            </View>
            
        </View>
      </View>
      
    </View>
    </View>
   
  )
}

export default AgentHouse