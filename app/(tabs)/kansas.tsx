





import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'expo-image';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const data = [
  {icon : 'clipboard-text-outline', text: 'My Bookings'},
  {icon : 'cards-heart-outline', text: 'My Favourites'},
  {icon : 'progress-clock', text: 'Recently Viewed'},
  {icon : 'card-bulleted-outline', text: 'Payment Method'},
  {icon : 'notification-clear-all', text: 'Notifications'},
  {icon : 'help-circle-outline', text: 'Help and Support'}
]

const kansas = () => {
  var width = Dimensions.get('window').width; //full width
  var height = Dimensions.get('window').height; //full height
  return (
    <SafeAreaView>
        <View style={{backgroundColor:'white', width:width*0.9, marginHorizontal:20, marginVertical:30, flexDirection:'row', padding:10, borderRadius:10, alignItems:'center'}}>
          <View>
            <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: '#0553',}}
            source='https://images.pexels.com/photos/792385/pexels-photo-792385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            />
          </View>
          <View style={{marginLeft:10, flex:1,}}>
            <Text style={{fontSize: 16,fontWeight: '600',}}>Antony Kamundia</Text>
            <Text style={{color:'gray'}}>antonykamundia2@gmail.com</Text>
          </View>
          <View style={{backgroundColor:'black', paddingHorizontal:15, paddingVertical:5, borderRadius:20,  }}>
            <Text style={{color:'white'}}>Edit</Text>
          </View>
        </View>
        <View style={{backgroundColor:'white', width:width*0.9, marginHorizontal:20, paddingVertical:20, flexDirection:'column', gap:30, paddingHorizontal:10, borderRadius:10}}>
          {data.map((item, index)=>(
            <View key={item.icon}>
              <View style={{flexDirection:'row', marginTop:5, marginBottom:15, gap:10, alignItems:'center', marginHorizontal:10}} key={item.icon}>
                <MaterialCommunityIcons name={item.icon} size={26} color="black" />
                <Text style={{fontWeight:600}}>{item.text}</Text>
              </View>
              <View style={{borderBottomWidth: 0.5, borderBottomColor: 'gray', marginVertical: 0,}} />
            </View>
          ))}
          <View style={{width:width*0.8, borderWidth:1, alignItems:'center', padding:10, borderRadius:40}}>
            <Text>Sign Out</Text>
          </View>
        </View>
        
        
          
        
    </SafeAreaView>
    
  )
}

export default kansas
