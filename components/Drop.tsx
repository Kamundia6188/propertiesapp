




import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';



  interface Child {
    data: any[]
    place: string
    iconname: string
  }

const Drop: React.FC<Child> = ({data, place, iconname}) => {
    console.log(place);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    // const renderLabel = () => {
    //     if (value || isFocus) {
    //       return (
    //         <Text style={[styles.label, isFocus && { color: 'blue' }]}>
    //           Bedrooms
    //         </Text>
    //       );
    //     }
    //     return null;
    //   };
  return (
    <View>
        <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? place : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
        setValue(item.value);
        setIsFocus(false);
        }}
        renderLeftIcon={() => (
        // <AntDesign
        //   style={styles.icon}
        //   color={isFocus ? 'blue' : 'black'}
        //   name="Safety"
        //   size={20}
        // />
        <MaterialCommunityIcons style={styles.icon} name={iconname} size={20} color={isFocus ? 'blue' : 'black'} />
        )}
    />
  </View>
  )
}

export default Drop


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
})

