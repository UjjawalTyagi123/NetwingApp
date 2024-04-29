import React from 'react'
import {View,Text,Image,StyleSheet,FlatList, TouchableOpacity} from "react-native"
import { useRoute } from '@react-navigation/native';

import Navbar from './Navbar';

export default function VendorDetail() {
   const review_data=[{
    name:"yash",
    img:img,
    comment:"The service was awesome ,it have been two years and my ac is running okay and the serviceman was very humble..  "
   },{
    name:"yash",
    img:img,
    comment:"The service was awesome ,it have been two years and my ac is running okay and the serviceman was very humble..  "
   },{
    name:"yash",
    img:img,
    comment:"The service was awesome ,it have been two years and my ac is running okay and the serviceman was very humble..  "
   }]
    const route = useRoute();
    const {img,loc,name}=route.params;
  return (
    <View>
    <Navbar/>
      <View >
      <View style={styles.item} >
        <Image style={{marginHorizontal:70,marginVertical:20,borderRadius:100,height:200,width:200}} source={img}/>
        <Text style={{marginHorizontal:140,fontSize:20}}>{name}</Text>
        <Text style={{marginLeft:20,fontSize:20}}>$350</Text>
        <Text style={{marginLeft:20,fontSize:16}}>Power saver AC service</Text>
        <Text style={{marginLeft:20,fontSize:16}}>Doorstep service with guarentee</Text>
        <Text style={{marginLeft:20,fontSize:16}}>Anti dust particles remover</Text>
        <Text style={{marginLeft:20,fontSize:16}}>Get exciting discounts</Text>
        <View style={{display:'flex',flexDirection:'row',marginLeft:40,marginTop:10}}>
          <TouchableOpacity style={{height:50,width:120,backgroundColor:'yellow',padding:10,borderRadius:20}}><Text style={{fontSize:20}}>Add to cart</Text></TouchableOpacity>
          <TouchableOpacity style={{height:50,width:120,backgroundColor:'green',padding:10,borderRadius:20,marginLeft:10}}><Text style={{fontSize:20,color:'white'}}>Get service</Text></TouchableOpacity>
        </View>
        <Text style={{marginLeft:15,fontSize:25,marginTop:10}}> CustomerReviews</Text>
        <FlatList
    
    data={review_data}
    numColumns={1}
    ListFooterComponent={<View style={{height: 200}}/>}
    renderItem={({item}) => (
       <View style={styles.reviewMain}>
         <View>
           <Image style={{height:70,width:70,borderRadius:100}} source={img}/>
           <Text style={{marginLeft:20}}>{item.name}</Text>
         </View>
          <Text style={{width:220,marginLeft:10}}>{item.comment}</Text>
         
       </View>
         
    )}
  />
      </View>
    </View>
    </View>
    
   
  )
}

const styles=StyleSheet.create({
    item:{
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000000', // Shadow color
        shadowOffset: { width: 0, height: 4 }, // Horizontal and vertical offset
        shadowOpacity: 0.1, // Opacity of the shadow
        shadowRadius: 8, // Radius of the shadow blur
        elevation: 5, // Android-specific elevation property
        
        borderColor:'black',
        marginVertical: 50,
        marginHorizontal: 20,
        height:600,
        width: 350, // Adjust width based on your grid requirements
        color:'black'
    },
    reviewMain:{
        display:'flex',
        flexDirection:'row',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000000', // Shadow color
        shadowOffset: { width: 0, height: 4 }, // Horizontal and vertical offset
        shadowOpacity: 0.1, // Opacity of the shadow
        shadowRadius: 8, // Radius of the shadow blur
        elevation: 5, // Android-specific elevation property
        borderColor:'black',
        width:300,
        height:150,
        marginHorizontal:20,
        marginVertical:50,
       
    }
})