import React from 'react'
import { View,Text,FlatList,StyleSheet ,Image, Alert,TouchableOpacity} from 'react-native'
import Navbar from './Navbar'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';


export default function Vendor() {

    let vendor_data=[{id:1,location:'delhi',img:vendor_img,name:'ujjawal',services:['AC','cooler'],disc:'5 years experienced in this service'},
    {id:2,location:'delhi',img:vendor_img,name:'vasu',services:['AC'],disc:'5 years experienced in this service'},
    {id:3,location:'delhi',img:vendor_img,name:'Aman',services:['AC'],disc:'5 years experienced in this service'},
    {id:4,location:'delhi',img:vendor_img,name:'Ritik',services:['AC'],disc:'5 years experienced in this service'},
    {id:5,location:'delhi',img:vendor_img,name:'Raju',services:['AC'],disc:'5 years experienced in this service'},
    {id:6,location:'delhi',img:vendor_img,name:'Rajat',services:['AC'],disc:'5 years experienced in this service'},
    {id:7,location:'delhi',img:vendor_img,name:'Akash',services:['AC'],disc:'5 years experienced in this service'}]
    const route = useRoute();
    const navigation = useNavigation();
    let {data,loc}=route.params;
    
   
    const final_obj=[]

    for(let i=0;i<vendor_data.length;i++){
      for(let j=0;j<vendor_data[i].services.length;j++)
        {
          if(vendor_data[i].services[j]==data)
          final_obj.push(vendor_data[i])
        }
    }
    
  return (
    <View>
    <Navbar/>
<Text style={{fontSize:20,marginLeft:30,marginTop:30}}>{final_obj.length >0 ?'Vendors':'No vendor available'}</Text>
    <FlatList
    
    data={final_obj}
    numColumns={1}
    ListFooterComponent={<View style={{height: 200}}/>}
    renderItem={({item}) => (
        <TouchableOpacity onPress={()=>navigation.navigate("vendorDetail",{img:item.img,loc:loc,name:item.name})}>
                   <View style={styles.main}>
         <Image style={{height:60,width:60,borderRadius:40}} source={item.img}/>
          <View style={{marginLeft:20,marginTop:10}}>
            <Text style={{fontSize:20}}>{item.name}</Text>
            <Text style={{marginLeft:10}}>{loc}</Text>
          </View>
          <Text style={{marginLeft:40,marginTop:20}}>5⭐</Text>
      </View>
             </TouchableOpacity>
         
    )}
  />
      
    </View>
  )
}

const styles=StyleSheet.create({
     main:{
        display:'flex',
        flexDirection:'row',
        height:80,
        width:'90%',
        
        margin:20,
        paddingLeft:10,
        paddingTop:10,
        backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000000', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Horizontal and vertical offset
    shadowOpacity: 0.1, // Opacity of the shadow
    shadowRadius: 8, // Radius of the shadow blur
    elevation: 5, // Android-specific elevation property
    borderColor:'black',
     }
})