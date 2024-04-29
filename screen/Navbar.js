import {React,useState,useEffect} from 'react'
import { View,StyleSheet ,TouchableOpacity,Image,FlatList,Text} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {
    const [close,setClose]=useState(false)
    const [closeLogin,setCloseLogin]=useState(false)
    const [logo, setlogo] = useState([]);
    const navigation = useNavigation();
   const logo_base_url=process.env.EXPO_PUBLIC_API_LOGO
    const handleLogin=(para)=>{
      navigation.navigate('login',{data:para})
      setCloseLogin(!closeLogin)
    }

    useEffect(() => {
      const getDataFromApi = async () => {
        let data = await axios.get(
          logo_base_url
        );
      
       let logo = JSON.parse(JSON.stringify(data.data.settings[0].logo));
        
        setlogo(logo)
      
       
      };
      getDataFromApi();
    }, []);

  return (
    <View>
        <View style={styles.navbar}>
           <TouchableOpacity onPress={()=>setClose(!close)}><Icon name="bars" size={40} color="#000" /></TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("Home")}><Image  style={{height:40,width:200,marginLeft:40}} source={{uri:`https://hometriangle.netwingsit.in/uploads/settings/logo/${logo}`}}/></TouchableOpacity> 
           <TouchableOpacity onPress={()=>setCloseLogin(!closeLogin)}><Icon name="user" size={40} color="#000" style={{marginLeft:30}} /></TouchableOpacity>
           
       </View>
         
       {close ?<View style={styles.zitem}>
         <TouchableOpacity onPress={()=>setClose(!close)}><Icon name="close" size={30} color="#000"  style={{marginLeft:0}}/></TouchableOpacity>
         <FlatList   
          data={[{icon:'home',name:'Home'},{icon:'contacts',name:'Contact'},{icon:'table',name:'About'},{icon:'shoppingcart',name:'MyCart'}]}
          numColumns={1}
          renderItem={({item})=>(
           <TouchableOpacity onPress={()=>navigation.navigate(item.name)} >
             <View style={styles.zitems}>
             <View style={{display:'flex',flexDirection:'row'}}>
              <Icon style={{marginRight:5}} name={item.icon} size={40} color="#000" />
              <Text style={{fontSize:20,marginLeft:5}}>{item.name}</Text>
              </View>
             </View>
              
           </TouchableOpacity>
          )}
         />
         
       </View>:''}
       {
        closeLogin ? <View style={styles.logincard}>
          <TouchableOpacity onPress={()=>handleLogin('login')}>
          <Text style={{fontSize:20,marginLeft:20,marginTop:2}}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>handleLogin('signup')}>
          <Text style={{fontSize:20,marginLeft:20,marginTop:10}}>SignUp</Text>
          </TouchableOpacity>
        </View>:''
       }
    </View>
  )
}

const styles = StyleSheet.create({
    navbar:{
        
         marginTop:40,
         display:'flex',
         flexDirection:'row'
    },
    zitem:{
         backgroundColor:'#FFFFFF',
         height:400,
         width:200,
         zIndex:2,
         position:'absolute',
         top:10,
         paddingTop:40,
         paddingLeft:10
       
    },
    zitems:{
        marginTop:20
    },
    logincard:{
      backgroundColor:'#FFFFFF',
      height:100,
      width:150,
      zIndex:2,
      position:'absolute', 
      top:90,
      paddingTop:10,
      marginLeft:220
    }
})