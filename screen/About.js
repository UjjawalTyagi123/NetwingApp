import { React, useState,useEffect } from "react";
import { View ,Text} from 'react-native'
import Navbar from './Navbar'
import axios from "axios";
import Icon from 'react-native-vector-icons/AntDesign';
import IconAdd from 'react-native-vector-icons/Entypo';
export default function About() {
  var Data=[];
  const [data, setData] = useState(Data);
   
  const getDataFromApi=async()=>{
    let data=await axios.get('https://hometriangle.netwingsit.in/api/settings')
   
    Data=JSON.parse(JSON.stringify(data.data.settings)) 
  
    setData(Data)
    
  }
  useEffect(()=>{

    getDataFromApi()
   
  },[])
 
  return (
    <View>
      <Navbar/>
      <Text style={{marginTop:15,fontSize:30,marginLeft:20}}>Information</Text>
     { data.length >0 ?<View style={{marginTop:30}}>
       <View style={{display:'flex',flexDirection:'row'}}><Icon name="phone" size={27} color="#000" style={{marginLeft:30}} />
       <Text style={{marginLeft:15}}>{data[0].mobile}</Text>
       </View>
       <View style={{display:'flex',flexDirection:'row',marginTop:10}}><Icon name="mail" size={27} color="#000" style={{marginLeft:30}} />
       <Text style={{marginLeft:15}}>{data[0].email}</Text>
       </View> 
       <View style={{display:'flex',flexDirection:'row',marginTop:10,width:250}}><IconAdd name="address" size={27} color="#000" style={{marginLeft:30}} />
       <Text style={{marginLeft:15}}>{data[0].address}</Text>
       </View>

       <View style={{marginTop:50,marginLeft:50,display:'flex',flexDirection:'row'}}>
       <Icon name="facebook-square" size={27} color="#000" style={{marginLeft:30}} />
       <Icon name="twitter" size={27} color="#000" style={{marginLeft:30}} />
       <Icon name="instagram" size={27} color="#000" style={{marginLeft:30}} />
       <Icon name="linkedin-square" size={27} color="#000" style={{marginLeft:30}} />
       <Icon name="youtube" size={27} color="#000" style={{marginLeft:30}} />
       </View>

       <View style={{marginTop:410,marginLeft:50}}>
        <Text>@2024-2024 All Rights Reserved. Designed By</Text>
        <Text style={{fontSize:18,marginLeft:70}}>Netwings IT solution</Text>
       </View>
      </View>:
      <Text style={{fontSize:18,marginLeft:150,marginTop:100}}>Loading...</Text>}
      
    </View>
  )
}
