import Drop from '@/components/Drop';
import Textinput from '@/components/Textinput';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { StyleSheet, Image, Platform, View, Text, TextInput, Dimensions } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';


const data = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
  ];

  const housetype = [
    {
        label :  'Apartment',
        value :  'Apartment'
    },
    {
        label :  'Bedsitters',
        value :  'Bedsitters'
    },
    { 
        label :  'Gated Communities',
        value :  'Gated Communities'
    },
    {
        label :  'One Bedroom',
        value :  'One Bedroom'
    }
]



export default function explore() {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [text, setText] = useState('');
  const icon = 'bed-outline';

    const onChangeText = () => {
      
    }

    // const { width, height } = Dimensions.get('window');
    // const windowWidth = Dimensions.get('window').height;
   
    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Bedrooms
          </Text>
        );
      }
      return null;
    };
  return (
    
      <View style={{flex:1,  backgroundColor: 'white'}}>
        <View style={{flexDirection:'row', justifyContent:'center', marginBottom:40 }}>
          <Text>Filter</Text>
        </View>
         {/* input */}
        <View style={styles.search}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Location"
            />
            <View style={styles.searchbtn}>
              <MaterialCommunityIcons name="home-search-outline" size={24} color="black" />
            </View>
          </View>
        <View>
        {/* {renderLabel()} */}
        <View style={{flexDirection:'column', gap:30, marginTop:20}}>
          <Drop data={housetype} place='House Type' iconname='warehouse'/>
          <Drop data={data} place='Bedrooms' iconname={icon}/>
          <Drop data={data} place='Bathrooms' iconname='bathtub-outline'/>
        </View>
        <View style={{flexDirection:'column', gap:30, marginHorizontal:20, marginVertical:30}}>
          <Textinput onChange={onChangeText} value={text} placeholder='Max Price'/>
          <Textinput onChange={onChangeText} value={text} placeholder='Min Price'/>
        </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'center', gap:20, marginTop:20}}>
          <View style={{backgroundColor:'yellow', paddingHorizontal:20, paddingVertical:15, borderRadius:30}}>
            <Text>Reset</Text>
          </View>
          <View style={{backgroundColor:'black', paddingHorizontal:20, paddingVertical:15, borderRadius:30}}>
            <Text style={{color:'yellow'}}>Apply Filter</Text>
          </View>
        </View>
      </View>
   
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 40,
    marginHorizontal: 20,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 25,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  //location
  search:{
    marginTop: 10,
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
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
});

